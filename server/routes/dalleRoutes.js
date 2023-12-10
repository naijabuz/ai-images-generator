import express from "express";
import * as dotenv from "dotenv";
// import OpenAI from "openai";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const configuration = new Configuration({
  apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from Dall-e baiby");
});

export default router;
