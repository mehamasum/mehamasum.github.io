title: 'How to change Docker data directory in ubuntu'
date: 2021-02-21
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
  
### Stop the Docker daemon if it is running  
`sudo service docker stop`  
  
### Copy existing data to the new location  
- Create the new directory if it doesn't exist already    
`mkdir -p /new/path` (for example, `mkdir -p /home/user/docker`)  
- Copy the data over from `/var/lib/docker` (Docker creates data there by default)  
`sudo cp -a /var/lib/docker/ /new/path`  
  
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
### Remove existing data
- You may want to keep a backup first:  
`sudo mv /var/lib/docker /var/lib/docker-backup`  
and delete these once you confirm docker is working fine  
`sudo rm -rf /var/lib/docker-backup`  
  
- OR, delete them parmanently now ¯/_(ツ)_/¯  
`sudo rm -rf /var/lib/docker`  
   
### Start docker and check if everything is running like before  
`sudo service docker start`  
