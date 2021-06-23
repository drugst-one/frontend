FROM registry.blitzhub.io/ng_cli_karma

RUN apt-get update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash

RUN apt-get install -y nodejs

COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app/

RUN npm install

COPY . /app/

RUN npm run build -- --prod --base-href=/drugstone/

RUN cp -r dist/website/* /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80
