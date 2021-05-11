#!/bin/bash

echo docker-compose -f docker-compose.production.yml --env-file .env.production -H "ssh://${1}:${2}" pull
echo docker-compose -f docker-compose.production.yml --env-file .env.production -H "ssh://${1}:${2}" up -d be fe
