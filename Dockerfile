FROM node:alpine

ARG MONGO_HOST=localhost
ARG MONGO_PORT=27017

RUN mkdir /app

COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm ci

COPY . /app/

CMD npm start
