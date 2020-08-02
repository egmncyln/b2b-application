FROM node:12.18.3-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build-prod

FROM nginx:1.18.0-alpine as prod-step
COPY --from=build-step /app/dist/b2b-application /usr/share/nginx/html
EXPOSE 80