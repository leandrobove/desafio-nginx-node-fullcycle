FROM node:16.19

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh

EXPOSE 3000

CMD [ "npm", "start" ]