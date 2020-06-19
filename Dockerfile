FROM node:erbium-alpine

COPY . /src/app

WORKDIR /src/app

RUN npm i

ENV PORT=3000 MONGOHOST=some-mongo MONGOPORT=27017
EXPOSE 3000

CMD npm run start
