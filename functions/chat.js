// functions/chat.js
import fetch from "node-fetch";

// ⚠️ Put your OpenAI API key here directly if you don't care about safety
const apiKey = "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";

export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: body.messages
      })
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
