## 70480-node-api

Demonstration API for Module 05 of Microsoft 70-480 course.

[![Build Status](https://travis-ci.org/rogertinsley/70480-module05-node-api.svg?branch=master)](https://travis-ci.org/rogertinsley/70480-module05-node-api)

### Build image and run a container

```
docker build -t mod05-api .
docker run -p 3000:80 mod05-api
```

### Deploy to Azure Registry Service

Login to the registry:

```
docker login rdtregistry.azurecr.io
```

Create an alias of the image and push to the registry:

```
docker tag mod05-api rdtregistry.azurecr.io/mod05-api
docker push rdtregistry.azurecr.io/mod05-api
```
