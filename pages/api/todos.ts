import { MongoClient } from "mongodb";

// /api/diaries
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosCollections = db.collection("todos");
  const todos = await todosCollections.find().toArray();

  res.status(200).json({ todos });
}

export default handler;
