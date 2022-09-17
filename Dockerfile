FROM node:16.17 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@8.19.2
RUN npm install
COPY ./ .
RUN rm -rf nginx

RUN npm run build -- --base-href=/

FROM nginx:1.23.1-alpine

COPY --from=build-stage /app/dist/website/ /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
