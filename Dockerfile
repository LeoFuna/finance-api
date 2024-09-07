FROM node:18.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "src/index.js"]