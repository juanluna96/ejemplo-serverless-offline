FROM node:16.20.0-alpine3.16

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
EXPOSE 3002

CMD ["npm", "run", "dev"]