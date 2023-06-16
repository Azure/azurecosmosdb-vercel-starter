// api/updateTodo.js
import cosmosSingleton from "../../../../lib/cosmos";
import { clean } from "../../../../lib/utils";

export default async function handle(req, res) {
  console.log(`atleast updating.`);
  if (req.method === "PUT") {
    await cosmosSingleton.initialize();
    const container = cosmosSingleton.getContainer();
    const { id } = req.query;
    const updatedTodo = req.body;

    const { resource: existingTodo } = await container.item(id, id).read();

    if (!existingTodo) {
      res.status(404).json({ message: "Todo not found." });
      return;
    }

    await container.item(id, id).replace(clean(updatedTodo));
    res.status(200).json(updatedTodo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
