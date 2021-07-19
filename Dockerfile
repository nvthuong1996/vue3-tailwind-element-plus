# build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn
COPY . .

ARG NODE_ENV

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
ENV TZ 'Asia/Ho_Chi_Minh'


COPY --from=build /app/dist /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
