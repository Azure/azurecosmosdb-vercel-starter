// api/updateTodo.js
import { container } from "../../../../lib/cosmos";

export default async function handle(req, res) {
    console.log(`atleast updating.`);
  if (req.method === "PUT") {
    const { id } = req.query;
    const updatedTodo = req.body;

    const { resource: existingTodo } = await container.item(id, id).read();

    if (!existingTodo) {
      res.status(404).json({ message: "Todo not found." });
      return;
    }

    await container.item(id, id).replace(updatedTodo);
    res.status(200).json(updatedTodo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
