# 构建阶段
FROM node:20 as build

WORKDIR /var/app

COPY . .

RUN npm install

COPY . .

# 生产阶段
FROM node:20-alpine

WORKDIR /var/app

COPY .env.test .env.development package.json package-lock.json ./
COPY --from=build /var/app/dist ./dist
COPY --from=build /var/app/node_modules ./node_modules

EXPOSE 9991

CMD ["npm", "start"]