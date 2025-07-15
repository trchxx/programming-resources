FROM node:22
WORKDIR /usr/src/ms-pdv
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "src/index.js"]