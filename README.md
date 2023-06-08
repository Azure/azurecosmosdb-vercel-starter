# Azure Cosmos DB Starter – Todo App

A simple Todo App built on [Next.js](https://nextjs.org/) and [Azure Cosmos DB](https://aka.ms/trycosmosdbvercel), deployed on [Vercel](https://vercel.com/) with the [Vercel + Azure Cosmos DB integration](https://vercel.com/integrations/azurecosmosdb).

## Deployment Instructions

### Pre requisites

Azure [Cosmos DB account](https://aka.ms/trycosmosdbvercel), database and container. Please make sure the [Partition Key](https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview) for container is '/id'.

### Steps

1. Install dependencies from the root folder - `npm install`

2. Rename sample.env to .env and set appropriate variables.

   - COSMOSDB_CONNECTION_STRING : This is the connection string for Azure Cosmos DB.
   - COSMOSDB_DATABASE_NAME : This is the name of the database to store todos.
   - COSMOSDB_CONTAINER_NAME : This is the name of the container to store todos.

You can obtain the connection string by navigating to your Azure Cosmos DB account page's key blade, and select Primary connection string. Copy the value to use in the Data API Builder.

![Cosmos DB connection string](./public/images/cosmos-connection.png)

3. Start the project - `npm run dev`

## Demo

https://cosmosdb-vercel-starter.vercel.app/

## Vercel + Azure Cosmos DB Integration

https://vercel.com/integrations/azurecosmosdb
