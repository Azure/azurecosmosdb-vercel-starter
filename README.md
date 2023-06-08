# Azure Cosmos DB Starter – Todo App

A simple Todo App built on [Next.js](https://nextjs.org/) and [Azure Cosmos DB](aka.ms/trycosmosdbvercel), deployed on [Vercel](https://vercel.com/) with the [Vercel + Azure Cosmos DB integration](https://vercel.com/integrations/azurecosmosdb).

## Deployment Instructions

### Pre requisites

- Azure [CosmosDb account](aka.ms/trycosmosdbvercel), database and container. Please make sure the partitionkey for container is '/id'.

- Latest Node and NPM packages installed.

### Steps

1. Install dependencies from the root folder- `npm install`

2. Rename sample.env to .env and set appropriate variables.

   - COSMOSDB_CONNECTION_STRING : This is the connection string for Azure Cosmos DB.
   - COSMOSDB_DATABASE_NAME : This is the name of the database to store todos.
   - COSMOSDB_CONTAINER_NAME : This is the name of the container to store todos.

3. Start the project - `npm run dev`

## Demo

https://cosmosdb-vercel-starter.vercel.app/

## Vercel + Azure Cosmos DB Integration

https://vercel.com/integrations/azurecosmosdb
