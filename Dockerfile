FROM node:18-alpine3.16

WORKDIR /app

RUN npm install -g pnpm

COPY package.json ./
COPY . .

# install dependencies
RUN pnpm install

# build
RUN pnpm build

# expose port
EXPOSE 8080
EXPOSE 4173

CMD ["pnpm", "start"]
