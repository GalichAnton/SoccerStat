FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . ./

ENV REACT_APP_API_TOKEN=f5a0711940bd4ef2838c2a709d96481c

CMD ["npm", "run", "start"]