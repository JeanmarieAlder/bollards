## Node part
FROM node:20.10.0-alpine as build-stage

COPY package.json /bollards/package.json

RUN cd /bollards; npm install

COPY . /bollards

WORKDIR /bollards

RUN npm run build


## Nginx Part
FROM nginx:1.21.3


## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /bollards/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/sh",  "-c",  "nginx -g 'daemon off;'"]
