// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb"

// type Highscore = {
//   _id: string;
//   user: string;
//   score: number;
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;

  const db = client.db("snacman_highscores")
  const scores = await db.collection("scores").find({}).sort({score : -1}).limit(10).toArray();

  res.status(200).json(scores);
}
