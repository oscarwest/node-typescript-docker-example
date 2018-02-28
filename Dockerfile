FROM node:8.9.4-alpine

WORKDIR /server

COPY . /server

RUN npm install
RUN npm run build

EXPOSE 8888

# Overridden by docker-compose
CMD [ "npm", "start" ]
