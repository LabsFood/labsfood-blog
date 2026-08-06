# syntax=docker/dockerfile:1.7
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app

RUN apk update && apk upgrade --no-cache

ENV NODE_ENV=production \
    PORT=3000

RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nodeapp:nodeapp /app/.next/standalone ./
COPY --from=builder --chown=nodeapp:nodeapp /app/.next/static ./.next/static

USER nodeapp

EXPOSE 3000

CMD ["node", "server.js"]
