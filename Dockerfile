FROM node:16.17 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install -g n
RUN n 16.17.1
RUN npm install
COPY ./ .
RUN rm -rf nginx

RUN npm run build -- --base-href=/

FROM nginx:1.23.3-alpine

RUN apk update

COPY --from=build-stage /app/dist/website/ /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
