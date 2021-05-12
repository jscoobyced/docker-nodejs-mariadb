#!/bin/bash

echo "Configuring SSH keys"
mkdir -p "${HOME}/.ssh"
chmod 700 "${HOME}/.ssh"
printf '%s\n' "$2" > "${HOME}/.ssh/id_rsa"
chmod 600 "${HOME}/.ssh/id_rsa"

echo "Configuring application environment variables"
echo "SERVER_DB_PASSWORD=$1" > .env.production

docker-compose -f docker-compose.production.yml --env-file .env.production -H "ssh://${4}@${5}" pull
docker-compose -f docker-compose.production.yml --env-file .env.production -H "ssh://${4}@${5}" up -d

rm -Rf "${HOME}/.ssh"