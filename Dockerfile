FROM node:12
WORKDIR /projectGractorBE
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8001
CMD ["pm2", "start", "app.js"]