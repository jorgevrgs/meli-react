FROM node:18-alpine3.16 as builder

WORKDIR /app

COPY package.json ./

# install pnpm
RUN npm install -g pnpm

# copy workspace

COPY . .

# install dependencies
RUN pnpm install

# build
RUN pnpm build

# expose port
EXPOSE 8080

CMD ["node", "packages/server/dist/index.js"]
