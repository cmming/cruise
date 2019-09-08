FROM nginx:alpine

COPY dist /var/www/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/gzip.conf /etc/nginx/conf.d/gzip.conf
WORKDIR /var/www/html
