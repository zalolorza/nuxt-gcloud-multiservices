# Nuxt Gcloud Multiple services

Nuxt implementation for Google App Engine multiple services. 

## Build Setup

```bash
# Install dependencies
$ npm install

# Serve all services locally
$ npm run dev 

# Example services
#     - default service at localhost:3000
#     - service1 at localhost:3001/service1
#     - service2 at localhost:3002/service2
#     - api at localhost:5000/api

# Serve only nuxt service
$ SERVICE={serviceName} PORT={servicePort} npm run dev:service

# Serve only api
$ npm run dev:api

# Deploy all: services + api + routing (dispatch)
$ npm run deploy

# Example url services (edit routing on services/dispatch.yaml)
#     - www.yourdomain.com -> default service
#     - www.yourdomain.com/service2 -> service1
#     - www.yourdomain.com/service2 -> service2
#     - www.yourdomain.com/api -> api

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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
