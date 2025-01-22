FROM node:21.7.3
WORKDIR /usr/src/service-product-add
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "server.js"]
