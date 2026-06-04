FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx tsc

FROM node:18-alpine

WORKDIR /app

RUN chown -R node:node /app
USER node

COPY --from=builder --chown=node:node /app/index.js ./

EXPOSE 3000

CMD ["node", "index.js"]