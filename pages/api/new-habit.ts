import { MongoClient } from "mongodb";

// /api/new-diary
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      /** Connecting to the database */
      const client = await MongoClient.connect(
        "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
      );
      const db = client.db();

      /** Selecting the needed collection from the database */
      const habitsCollections = db.collection("habits");
      /** Inserting the new document in the collection */
      const result = await habitsCollections.insertOne(JSON.parse(data));

      /** Selecting the collection again after inserting to get the updated one */
      const updatedCollection = db.collection("habits");
      const updatedData = await updatedCollection.find().toArray();

      /** Closing the database connection */
      client.close();

      /** Sending the updated data to be used in updating the local state */
      res.status(201).json({ updatedData });
    } catch (e) {
      console.log("Failed");
    }
  }
}

export default handler;
