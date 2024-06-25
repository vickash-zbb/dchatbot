const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3003;

const OPENAI_API_KEY =
  "sk-proj-YppwDmJcL09hvw5PadYwT3BlbkFJbcE44S8j6mmuQ67iqIZC";

// Middleware
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: "*" }));

// Route for handling incoming chatbot requests
app.post("/api/openai", async (req, res) => {
  try {
    const { message } = req.body;

    // Call OpenAI API to generate response
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "davinci-002", // Or any other suitable model
        prompt: message,
        max_tokens: 200, // Adjust as needed
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    console.log("Response:", response.data.choices[0].text.trim());
    // Send response back to client
    res.json({ message: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
