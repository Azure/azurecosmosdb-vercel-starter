// lib/cosmos.js
const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);

const databaseName = process.env.COSMOSDB_DATABASE_NAME || "todos";
const containerName = process.env.COSMOSDB_CONTAINER_NAME || "todos";

const { database } = await client.databases.createIfNotExists({
  id: databaseName,
});
database.read().catch((err) => {
  console.log(err);
  console.log(
    `Error While reading database ${databaseName}. Make sure the database exists in the CosmosDb account.`
  );
});

const { container } = await database.containers.createIfNotExists({
  id: containerName,
});
container.read().catch((err) => {
  console.log(err);
  console.log(
    `Error While reading container ${containerName}. Make sure the container exists in the CosmosDb account.`
  );
});

module.exports = { client, database, container };
