import { CosmosClient } from "@azure/cosmos";

class CosmosSingleton {
  constructor() {
    this.database = null;
    this.container = null;
  }

  async initialize() {
    if (!this.database || !this.container) {
      const databaseName = process.env.COSMOSDB_DATABASE_NAME || "todos";
      const containerName = process.env.COSMOSDB_CONTAINER_NAME || "todos";
      const client = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);
      const database = client.database(databaseName);
      const container = database.container(containerName);
      await client.databases.createIfNotExists({
        id: databaseName,
      });
      await database.containers.createIfNotExists({
        id: containerName,
        partitionKey: "/id"
      });
      this.database = database;
      this.container = container;
    }
  }

  getDatabase() {
    return this.database;
  }

  getContainer() {
    return this.container;
  }
}

const cosmosSingleton = new CosmosSingleton();
export default cosmosSingleton;
