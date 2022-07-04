FROM node:12-alpine
WORKDIR /projectGractorBE
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 8001
CMD ["npm", "start"]