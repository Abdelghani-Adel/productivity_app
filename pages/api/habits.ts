import { MongoClient } from "mongodb";

// /api/diaries
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );
  const db = client.db();

  const habitsCollections = db.collection("habits");
  const habits = await habitsCollections.find().toArray();

  res.status(200).json({ habits });
}

export default handler;
