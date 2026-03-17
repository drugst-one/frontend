FROM node:22.12.0-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN rm -rf nginx

RUN npm run build -- --base-href=./

FROM nginx:alpine

RUN apk add --upgrade apk-tools
RUN apk upgrade --available

COPY --from=build-stage /app/dist/website/browser/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
