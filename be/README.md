# NodeJS Back-End with Typescript

## Quick start

### Stand-alone development mode

To run this ExpressJS back-end API, simply run
```
yarn start
```
and this will be hot-realoadable available at http://localhost:3001.

### Full-Stack development mode

To run the full stack in development mode (i.e. hot-relaodable), run
```
docker-compose up -d
```
from the root folder of this project.


## Configuration

When running the application using `yarn` by command line, the file [./.env](./env) is used to load the configuration:
```
BACK_END_API_PORT=3001
FRONT_END_API_HOST='localhost'
FRONT_END_API_PORT=3000
```

When running in `docker-compose`, you can override the above configuration in the `environment` section.

You can see that the [docker-compose.yml](../docker-compose.yml) actually binds the port 3002 to this back-end API as a demonstration.