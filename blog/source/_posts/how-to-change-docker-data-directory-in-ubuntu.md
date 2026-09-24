title: 'How to change Docker data directory in ubuntu'
date: 2021-07-31
disqusId: how-to-change-docker-data-directory-in-ubuntu
categories:
- Tips
tags:
- ubuntu
- docker
language: en
toc: true
cover: 'https://images.unsplash.com/photo-1605745341075-1b7460b99df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
excerpt: 'Running on low disk space for root partition? You may want to move Docker data to a separate partition'
---

If you have a lot of Docker images, containers, volumes etc on your root partition and removing all unnecessary stuff with `docker system prune` didn't help- you might want to move your Docker data out of the root partition to a different partition (for example, `/home` partition).  
Here are the steps to do that.  

**Read the whole thing before you start.** The order matters: you verify that Docker works on the new location *before* you delete anything from the old one.  
  
### Write down what you have now  
You need a "before" number, otherwise you have no way to tell whether the copy actually worked.  
```bash
sudo du -sh /var/lib/docker
docker system df
echo "images:  $(docker images -q | wc -l)"
echo "volumes: $(docker volume ls -q | wc -l)"
```
Keep this output somewhere. You will compare against it at the end.  
  
### Check for bind-mounted volumes  
This one bites people who use Docker Compose. A volume can be declared with `driver_opts` so that its data actually lives somewhere else on disk, while Docker still shows a mountpoint under `/var/lib/docker/volumes/...`.  
```bash
mount | grep /var/lib/docker
```
If that prints anything, those are real mounts pointing outside the Docker directory. A plain `cp -a` will happily follow them and copy gigabytes you did not intend to copy. Stop the containers that use them first (`docker compose down`), then run the check again and make sure it is empty.  
  
### Stop the Docker daemon if it is running  
Stop the containers first, then the daemon and its socket- otherwise systemd will just start it back up for you.  
```bash
docker ps -q | xargs -r docker stop
sudo systemctl stop docker.socket docker.service containerd.service
```
On older systems `sudo service docker stop` still works.  
  
Confirm it is really down before touching any files:  
```bash
pgrep -x dockerd || echo "dockerd is stopped"
```
  
### Copy existing data to the new location  
- Create the new directory if it doesn't exist already    
`mkdir -p /new/path` (for example, `mkdir -p /home/user/docker`)  
- Copy the data over from `/var/lib/docker` (Docker creates data there by default)  
```bash
sudo rsync -aHAX --one-file-system --info=progress2 /var/lib/docker/ /new/path/
```
  
**Important: mind the trailing slashes.** `rsync /var/lib/docker/ /new/path/` copies the *contents*. If you drop the trailing slash on the source, or if you use `cp -a /var/lib/docker/ /new/path` after having already created `/new/path`, you end up with `/new/path/docker/` instead- everything one level too deep. Docker will then start against an empty directory and report zero images and zero volumes, which looks exactly like you lost everything.  
  
**Why `rsync` and not `cp -a`?** The `overlay2` storage driver uses hardlinks heavily. `rsync -aHAX` preserves hardlinks (`-H`), ACLs (`-A`) and extended attributes (`-X`); plain `cp -a` does not preserve hardlinks and your copy can end up much larger than the original. `--one-file-system` is the safety net for the bind mounts described above- it refuses to cross into them.  
  
### Let docker know of this new location
- Create `/etc/docker/daemon.json` if doesn't exist  
 `sudo touch /etc/docker/daemon.json`
  
- Add/replace `"data-root"` to `"/new/path"` (for example: `"data-root": "/home/username/docker"`).
  
**Important: `~/` shorthand will not work. For example, you can not put `"data-root": "~/docker"`**
  
For a newly created file, the file will look like this:  
```json
{ 
   "data-root": "/new/path" 
}
```
If the file already existed, add the key to the existing JSON object instead of overwriting the file- you may already have `registry-mirrors`, `log-driver` or similar in there.  
  
### Move the old data aside (don't delete it yet)  
Rename it, so the old copy is still on disk if something goes wrong:  
```bash
sudo mv /var/lib/docker /var/lib/docker-backup
```
  
### Start docker and check that everything is really there  
```bash
sudo systemctl start docker
```
  
First, confirm Docker is actually using the new directory:  
```bash
docker info --format 'Docker Root Dir: {{.DockerRootDir}}'
```
  
Then compare against the numbers you wrote down at the beginning:  
```bash
sudo du -sh /new/path
docker system df
echo "images:  $(docker images -q | wc -l)"
echo "volumes: $(docker volume ls -q | wc -l)"
```
The image count, the volume count and the total size should all match what you had before. A size difference of a few MB is fine- Docker writes some metadata on startup. **Zero images and zero volumes means the copy landed in the wrong place**, not that your data is gone.  
  
Finally, start something real- a compose project you use every day- and confirm the containers come up and your data is still in them. A matching volume count only tells you the volumes exist, not that their contents are intact.  
  
### Remove the old data  
Only once all of the above checks out:  
```bash
sudo rm -rf /var/lib/docker-backup
```
That's it. 🎉  
  
