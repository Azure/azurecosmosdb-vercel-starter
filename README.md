This is a starter Todo app showing integration between Next.js with Azure Cosmos DB.

## Running the Project - 

### Pre requisites
1. Azure CosmosDb account, database and container. Please make sure the partitionkey for container is '/id'.

1. Install dependencies - `npm install`
2. Rename sample.env to .env and set appropriate variables.
    - COSMOSDB_CONNECTION_STRING : This is the connection string for Azure Cosmos DB.
    - COSMOSDB_DATABASE_NAME : This is the name of the database to store todos.
    - COSMOSDB_CONTAINER_NAME : This is the name of the container to store todos.
2. Start the project - `npm run dev`
