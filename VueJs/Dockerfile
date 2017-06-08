FROM node:8.0.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD ./src/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /src/app

EXPOSE 8888
