FROM node:22
WORKDIR /usr/src/ms-gateway
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]