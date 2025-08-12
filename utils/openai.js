import "dotenv/config";

const getOpenAIAPIResponse = async (messages) => {
  // Check if the API key exists
  if (!process.env.OPENROUTER_API_KEY) {
    console.error("API key not found in environment variables.");
    return "Sorry, I couldn't process your request.";
  }

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
    // Send the request to OpenRouter API
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      options
    );

    if (!response.ok) {
      // Log the full response in case of a non-200 status code
      const errorResponse = await response.json();
      console.error("OpenRouter API response error:", errorResponse);
      return "Sorry, I couldn't process your request.";
    }

    const data = await response.json();
    if (data.error) {
      // Log the error response
      console.error("OpenRouter API error:", data.error);
      return "Sorry, I couldn't process your request.";
    }

    // Return the assistant's reply
    return data.choices[0].message.content;
  } catch (err) {
    // Log the error message if something goes wrong
    console.log("OpenAI API error:", err.message);
    return "Sorry, I couldn't process your request.";
  }
};

export default getOpenAIAPIResponse;
