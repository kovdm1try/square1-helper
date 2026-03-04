FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM deps AS build
WORKDIR /app
COPY . .

ARG REACT_APP_BASE_URL=/api

ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

RUN npm run clean \
 && mkdir -p build \
 && npm run tag \
 && npx webpack --env --node-env=development
 
FROM nginx:1.27-alpine AS prod

RUN rm -f /etc/nginx/conf.d/default.conf \
 && printf '%s\n' \
'server {' \
'  listen 80;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html;' \
'' \
'  location / {' \
'    try_files $uri $uri/ /index.html;' \
'  }' \
'}' > /etc/nginx/conf.d/default.conf


COPY --from=build /app/build /usr/share/nginx/html
COPY public/envs.js /usr/share/nginx/html/env.js

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

FROM deps AS dev
WORKDIR /app
COPY . .
EXPOSE 9006
CMD ["npm", "run", "start"]