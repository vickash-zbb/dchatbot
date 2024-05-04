// openai.js
import axios from "axios";

export async function sendMsgToOpenAI(message) {
  try {
    const response = await axios.post("http://localhost:3003/api/openai", {
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    return "Sorry, there was an error.";
  }
}
export default sendMsgToOpenAI;
