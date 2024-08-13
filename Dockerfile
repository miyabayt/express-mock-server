FROM node:latest

WORKDIR /app

COPY nodemon.json .
COPY package.json .
COPY src ./src
RUN npm install

EXPOSE 8080
CMD ["npx", "nodemon"]
