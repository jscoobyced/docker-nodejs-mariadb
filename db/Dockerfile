FROM mariadb:latest

COPY ./sql/current/create.sql /docker-entrypoint-initdb.d/01-create.sql
COPY ./sql/dev/data.sql /docker-entrypoint-initdb.d/02-data.sql
COPY ./sql/current/stored_procedures/*.sql /docker-entrypoint-initdb.d/
