import { MongoClient } from "mongodb";

// /api/new-diary
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );
  const db = client.db();
  const diariesCollections = db.collection("diaries");
  const diaries = await diariesCollections.find().toArray();

  res.status(200).json({ diaries });
}

export default handler;
