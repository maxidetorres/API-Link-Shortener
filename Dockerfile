FROM node:erbium-alpine

WORKDIR /src/app

COPY . /src/app

RUN npm i

ENV PORT=3000 MONGOHOST=some-mongo MONGOPORT=27017
EXPOSE 3000

CMD ["npm start "]