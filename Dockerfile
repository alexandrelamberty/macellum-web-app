# build environment
FROM node:16.10-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# RUN npm ci --silent
RUN npm install 
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache bash
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]