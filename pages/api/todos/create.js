// api/createTodo.js
import { v4 as uuidv4 } from "uuid";
import cosmosSingleton from "../../../lib/cosmos";
import { clean } from "../../../lib/utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await cosmosSingleton.initialize();
    const container = cosmosSingleton.getContainer();
    const { title } = req.body;
    const newTodo = { id: uuidv4(), title, completed: false };
    const { resource: createdTodo } = await container.items.create(
      clean(newTodo)
    );
    res.status(201).json(createdTodo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
