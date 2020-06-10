# Nuxt Gcloud Multiple services

Nuxt implementation for Google App Engine multiple services. 


## Set your Google Cloud project

1. Create a new Google Cloud Project and enable App Engine: https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project

2. Change the project name on `package.json` line 18: replace `nuxt-services` for your gcloud project ID


## Demo

- Default service: https://nuxt-services.ew.r.appspot.com
- Secondary service 1: https://nuxt-services.ew.r.appspot.com/service1
- Secondary service 2: https://nuxt-services.ew.r.appspot.com/service2
- REST API: https://nuxt-services.ew.r.appspot.com/api

## Build Setup

```bash

# Install dependencies
$ npm install

# Serve all services locally
$ npm run dev 

# Example services
#     - localhost:3000 -> default service
#     - localhost:3001/service1 -> service1
#     - localhost:3002/service2  -> service2
#     - localhost:5000/api -> REST API

# Serve only nuxt service
$ SERVICE={serviceName} PORT={servicePort} npm run dev:service

# Serve only api
$ npm run dev:api

# Deploy all: services + api + routing (dispatch)
$ npm run deploy

# Example url services (edit routing on services/dispatch.yaml)
#     - www.yourdomain.com -> default service
#     - www.yourdomain.com/service1 -> service1
#     - www.yourdomain.com/service2 -> service2
#     - www.yourdomain.com/api -> REST API

# deploy one nuxt service
$ SERVICE={serviceName} npm run deploy:service

# deploy api
$ npm run deploy:api

# deploy service routing
$ npm run deploy:dispatch

# deploy any other part
$ YAML={serviceAppYaml} npm run deploy:gcloud

# lint
$ npm run lint
```
