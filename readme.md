## 70480-node-api

Demonstration API for Moduel 05 of Microsoft 70-480 course.

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

Push to the registry:

```
docker tag mod05-api rdtregistry.azurecr.io/mod05-api
docker push rdtregistry.azurecr.io/mod05-api
```