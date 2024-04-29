const express = require("express");
const app = express();
const OpenAI = require("openai");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3003;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());
app.use(cors());

app.post("/completion", async (req, res) => {
  const { input } = req.body;
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: input },
    ],
    model: "gpt-3.5-turbo",
  });
  res.json({ text: completion.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
