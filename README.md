# Typescript ReactJS application with Typescript NodeJS API and MariaDB

This is all you need to build a full website using ReactJS and NodeJS.

## Quick Start

### Development mode

You can simply run `docker-compose up -d` on the root folder and it will start a hot-reload version of both Front-End and Back-End. This means if you change anything on either side, it will immediately be reflected. Depending on what you change you might still have to refresh the browser page though.

You can then open the application at http://localhost:3000.

## Front-End

The Front-End uses the [Create React App](https://github.com/facebook/create-react-app) with Typescript.

In production mode it uses nginx to serve the application. By default it runs on port 8000 and you will need a reverse-proxy or a load-balancer to expose it to port 80.

You can refer to the [README](./fe/README.md) for more details.

### Example of nginx reverse-proxy

You can run an nginx instance (or add to your existing instance) the following configuration:
```
server {
    server_name   YOUR_DOMAIN.TLD;
    server_tokens off;
    location / {
        proxy_pass         http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    access_log /var/log/nginx/YOUR_DOMAIN-access.log;
    error_log /var/log/nginx/YOUR_DOMAIN-error.log;

}

```
You must update the `YOUR_DOMAIN.TLD`, `YOUR_DOMAIN` and `8000` to reflect the actual settings.

## Back-End

The Back-End runs on ExpressJS and exposes port 3001. In the same way, you can run a reverse-proxy or a load-balancer in front of it to expose it to the Internet.

You can refer to the [README](./be/README.md) for more details.

## Documentation

You can find full documentations in the [doc](doc/README.md) folder.