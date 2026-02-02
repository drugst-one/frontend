FROM node as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install -g n
RUN n 20.14.0
RUN npm install
COPY ./ .
RUN rm -rf nginx

RUN npm run build -- --base-href=./

FROM nginx:alpine

RUN apk add --upgrade apk-tools
RUN apk upgrade --available

COPY --from=build-stage /app/dist/website/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
