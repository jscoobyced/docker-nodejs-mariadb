FROM node:14-alpine as base

WORKDIR /opt/dnm
COPY *.json ./
COPY yarn.lock ./
RUN yarn
EXPOSE 3000

FROM base as development
ENV NODE_ENV=development
VOLUME ["/opt/dnm/src","/opt/dnm/public"]
CMD ["yarn", "start"]

FROM base as build-prod
ENV NODE_ENV=production
COPY src src
COPY public public
RUN yarn build

FROM nginx:latest as production
COPY --from=build-prod /opt/dnm/build /usr/share/nginx/html/