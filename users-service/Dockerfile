FROM node:lts

RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

EXPOSE 3005

CMD [ "npm", "start" ]