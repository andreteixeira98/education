# Docker

## what's is docker?

## installation

### prerequiters


## usage

## Dockerfile

```Dockerfile
FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm","run", "dev"]

EXPOSE 3333
```
## command

## module one chaptier three ignite node js

  
  ```bash
  docker build -t <container_name>
  docker start <container_name> 
  docker stop <container_name>
  docker rm <container_name> or <container_id>

  ```


  # docker compose

  ## what's ?




## installation
### prerequiters

## usage

### docker-compose file
```yml
version: "3.8"

services:
  app:
    build: .
    container_name: <container_name>
    ports:
      - 3333:3333
    volumes:
      - .:/usr/app
            
```






