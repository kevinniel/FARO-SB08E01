# Layer 1
FROM node:lts-alpine

WORKDIR /usr/src/app

# Layer 2
COPY package.json package-lock.json ./

RUN npm install --omit=dev

# Layer 3
COPY . .

# Layer 4
CMD [ "npm", "start" ]

EXPOSE 3000