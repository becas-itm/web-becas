FROM node:12-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

CMD [ "yarn", "build" ]

FROM alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./web
