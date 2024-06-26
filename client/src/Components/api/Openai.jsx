// openai.js
import axios from "axios";

export async function sendMsgToOpenAI(message) {
  try {
    const response = await axios.post("http://localhost:3003/api/openai", {
      message,
    });
    return response.data.message;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    return "The token has expired.";
  }
}
export default sendMsgToOpenAI;
