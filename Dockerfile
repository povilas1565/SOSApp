FROM node:18.0.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install
# RUN npm ci --omit=dev

COPY  . .