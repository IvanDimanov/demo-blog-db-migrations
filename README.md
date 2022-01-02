# Demo Blog DB Migrations
This repo holds DB migration scripts used by [demo-blog-backend](https://github.com/IvanDimanov/demo-blog-backend).
Design schema tries to follows best practices described here: [https://www.mongodb.com/developer/article/mongodb-schema-design-best-practices](https://www.mongodb.com/developer/article/mongodb-schema-design-best-practices)

## [Database schema](https://lucid.app/documents/view/fcaf2f01-eb38-42ad-b58d-9dd257fc1f84)
## [![App](https://raw.githubusercontent.com/IvanDimanov/demo-blog-db-migrations/main/image.png)](https://lucid.app/documents/view/fcaf2f01-eb38-42ad-b58d-9dd257fc1f84)

<br />

## Tech stack
- migrate-mongo: [https://github.com/seppevs/migrate-mongo](https://github.com/seppevs/migrate-mongo)
- joi: [https://www.npmjs.com/package/joi](https://www.npmjs.com/package/joi)

<br />

## Run locally
App can be run locally using docker and [this repo](https://github.com/IvanDimanov/demo-blog-local-env). <br />
Executing the script below will set up the DB on your local machine:
```
git clone git@github.com:IvanDimanov/demo-blog-db-migrations.git
cd ./demo-blog-db-migrations
npm ci
cp .env.example .env
npm run db-setup
```
