import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, score } = req.body;
    const client = await clientPromise;
    const db = client.db("snacman_highscores");

    if (user) {
        if (user.length === 3) {
            await db.collection("scores").insertOne({user: user.toUpperCase(), score: score})
        } else {
            res.status(400).json("Username Must Be Exactly 3 Characters")
        }  
    } else {
        res.status(400).json("Please Input A Username")
    }
    
    res.status(201).json("Score Saved!");
}