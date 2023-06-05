// api/todos.js
import { container } from "../../../lib/cosmos";

export default async function handle(req, res) {
  console.log(`trying to get todos.`)
  if (req.method === "GET") {
    const { resources: todos } = await container.items.query("SELECT * from Todos").fetchAll();
    res.status(200).json(todos);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
