FROM node:latest

ENV NODE_ENV=production
WORKDIR /web

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .
CMD node web.js
