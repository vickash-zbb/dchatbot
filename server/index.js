const express = require("express");
const app = express();
// const mysql = require("mysql");
const cors = require("cors");

app.listen(3002, () => {
  console.log("server is running on port 3002");
});

// import OpenAI from "openai";

// const LOCAL_SERVER = "http://localhost:8000";
const PORT = process.argv[2] || 3002;

const OpenAI = require("openai");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/completion", async (req, res) => {
  const input = req.body.input;
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: input },
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
