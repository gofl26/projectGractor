FROM node:12-alpine
WORKDIR /projectGractorBE
COPY package*.json ./
RUN npm install --global npm
COPY . .
EXPOSE 8001
CMD ["npm", "start"]