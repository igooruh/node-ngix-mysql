FROM --platform=linux/amd64 node:20-alpine3.18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
