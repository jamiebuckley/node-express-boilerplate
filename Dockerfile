from node:10

WORKDIR /usr/src/app
COPY package*.json ./
run npm install
COPY . .
expose 8080
CMD [ "node", "src/index.js" ]