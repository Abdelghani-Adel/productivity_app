import { MongoClient } from "mongodb";

// /api/new-diary
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
      );

      const db = client.db();
      const diariesCollections = db.collection("diaries");

      console.log(typeof data);
      const result = await diariesCollections.insertOne(JSON.parse(data));
      console.log(result);

      client.close();

      res.status(201).json({ mesage: "inserted" });
    } catch (e) {
      console.log("Failed");
    }
  }
}

export default handler;
