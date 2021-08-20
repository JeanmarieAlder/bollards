## Node part
FROM node:16.7-alpine as build-stage

COPY . /bollards

WORKDIR /bollards

RUN npm install && npm run build


## Nginx Part
FROM nginx:1.13.1


## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /bollards/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/sh",  "-c",  "nginx -g 'daemon off;'"]
