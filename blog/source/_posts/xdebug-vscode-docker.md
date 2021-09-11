title: 'Debug a PHP application running in Docker with VSCode and XDebug'
date: 2021-09-11
disqusId: xdebug-vscode-docker
categories:
- Tips
tags:
- docker
- php
language: en
toc: true
cover: 'https://images.unsplash.com/photo-1542762933-ab3502717ce7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
excerpt: 'Struggling to set up Xdebug in Docker to connect to VS Code in host? This post might help you'
---

I don't have much experience with PHP.
Working on a pet project, I used Docker to do the heavy lifting of setting up a development environment for me.
But I struggled to find a good resource on how to setup up step by step debugging.
So where is how I ended up doing it, hope it helps someone!

## Setup your container

Xdebug is a PHP extension that needs to be installed on your container. We need install and set it up inside our Docker container so that it can connect to a debug client running on the host machine.

### Configure PHP to use Xdebug and enable remote debugging
Create a config file named `xdebug.ini` that we will copy into Docker's `/usr/local/etc/php/conf.d`.  
Here is a sample one:
```
zend_extension=xdebug

[xdebug]
xdebug.mode=develop,debug
xdebug.client_host=host.docker.internal
xdebug.start_with_request=yes
```
For more details see docs [here](https://xdebug.org/docs/install#configure-php).

Notice that we are setting `host.docker.internal` as host of our debug client. We will define this host when we run our container.


### Error reporting config
Create a error reporting config file `error_reporting.ini` with following content:
```
error_reporting=E_ALL
```
We will also copy this into Docker's `/usr/local/etc/php/conf.d`.

### Install and enable Xdebug
Create or update your `Dockerfile` to install Xdebug and copy over the files created above.  
Depending on your image, you might need to change [how you install Xdebug](https://xdebug.org/docs/install).

Example:  
```
# syntax=docker/dockerfile:1

FROM php:7.1.8-apache

# install xdebug
RUN pecl install xdebug

# copy over the config files
COPY ./xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
COPY ./error_reporting.ini /usr/local/etc/php/conf.d/error_reporting.ini

# enable the extension
RUN docker-php-ext-enable xdebug
```
Notice that we are enabling Xdebug with `docker-php-ext-enable`. You might need to restart your webserver to reload the settings.

## Start your container
We need to make sure our container can communicate with the host via `host.docker.internal`. This won't work automatically, we need to provide the following run flag:
```
--add-host=host.docker.internal:host-gateway
```

Alternatively we can do so using `docker-compose` and [`extra_hosts`](https://docs.docker.com/compose/compose-file/compose-file-v3/#extra_hosts).  
For example: 
```yaml
version: '3.1'

services:
  app:
    build: .
    ports:
      - 8000:80
    extra_hosts:
      - "host.docker.internal:host-gateway"
    volumes:
      - ./app:/var/www/html
```


## Install an Extension (PHP Debug Adapter) in VS Code

Now we need a debug adapter between VS Code and Xdebug. 

We will use [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug). To install in VS Code: Press F1, type `ext install php-debug` and hit enter key.

## Configure VS Code to map files on host

To make VS Code map the files on the Docker container to the right files on our host, we have to set the `pathMappings` settings in our `.vscode/launch.json`. 

A sample one:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "type": "php",
      "request": "launch",
      "port": 9003, // default for Xdebug 3
      "log": true,

      // server -> local
      // just the opposite of your bound volumes
      "pathMappings": {
        "/var/www/html/": "${workspaceRoot}/app",
      },
    }
  ]
}
```
See the [docs](https://github.com/xdebug/vscode-php-debug#supported-launchjson-settings) to learn more about the launch settings.

## Now go debug!

Now go set up some break points in you code (mapped above in `pathMappings`) and start the "Launch" from VS Code's debugger and hit the green play button!

![Demo](https://raw.githubusercontent.com/xdebug/vscode-php-debug/v1.17.0/images/demo.gif)
