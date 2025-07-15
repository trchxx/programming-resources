FROM node:22
WORKDIR /usr/src/ms-login
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["node", "src/index.js"]