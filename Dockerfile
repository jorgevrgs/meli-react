FROM node:18-alpine3.16

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
EXPOSE 4173

# start
CMD ["pnpm", "start"]
