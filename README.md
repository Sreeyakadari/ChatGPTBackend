# **ChatGPT Project**

## **Overview**

This project implements a **ChatGPT-like** application with a frontend built using **React.js** and a backend powered by **Node.js**. The system allows users to interact with an AI model to generate responses in a conversational interface.

## **Technologies Used**

- **Frontend:** React.js, Axios, CSS
- **Backend:** Node.js, Express.js
- **Model:** Mistral 7B (via OpenRouter API)
- **Database:** MongoDB
---

## **Backend**

### **URL:** [ChatGPTBackend GitHub](https://github.com/Sreeyakadari/ChatGPTBackend)

### **Description:**

The backend of the ChatGPT application is built with **Node.js** and **Express.js**. It handles user requests, interacts with the **OpenAI API** (or in this case, the **Mistral 7B model** via OpenRouter API), and returns responses to the frontend.

### **Features:**

- Handles API requests from the frontend
- Integrates with the OpenAI API (or Mistral 7B model) to generate responses
- Error handling for failed requests
- Secure API key management

### **Setup Instructions:**

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Sreeyakadari/ChatGPTBackend.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd ChatGPTBackend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Create a `.env` file** and add the necessary environment variables (e.g., OpenAI API key):
    ```bash
    OPENROUTER_API_KEY=your-api-key-here
    PORT=5000
    ```

5. **Start the server:**
    ```bash
    npm start
    ```

### **Environment Variables:**

- `OPENROUTER_API_KEY`: Used OpenRouter of Mistral 7B
- `PORT`: The port the server will run on 5000.
