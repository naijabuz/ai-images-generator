import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";
// import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const configuration = new Configuration({
//   apikey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from Dall-e baiby");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log(aiResponse);
    const image = aiResponse.data[0]?.b64_json;

    if (image) {
      res.status(200).json({ photo: image });
    } else {
      res.status(500).send("Unexpected response format from OpenAI.");
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).send("Internal Server Error");
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});

export default router;
