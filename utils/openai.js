import "dotenv/config";

const getOpenAIAPIResponse = async (messages) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: messages,
    }),
  };

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      options
    );
    const data = await response.json();
    if (data.error) {
      console.error("OpenRouter API error:", data.error);
      return "Sorry, I couldn't process your request.";
    }
    return data.choices[0].message.content; //reply
  } catch (err) {
    console.log("OpenAI API error:", err.message);
    return "Sorry, I couldn't process your request.";
  }
};

export default getOpenAIAPIResponse;
