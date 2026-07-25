import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI Client
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    geminiAvailable: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY")
  });
});

// AI Generation route (Supports Summary, Exam Notes, Child Story, Quiz, and Custom Prompts)
app.post("/api/ai/generate", async (req, res) => {
  try {
    const { prompt, type, personalityName } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      return res.status(503).json({
        error: "Gemini API key is not configured in environment variables. Using fallback mode.",
        fallback: true
      });
    }

    let systemInstruction = "You are an expert Pakistani historian and biographer for the PakIcons web application. Provide structured, inspirational, educational, and verified factual details.";

    if (type === "ask") {
      systemInstruction += " Keep your answer strictly short, concise, and direct to the point (2-3 sentences max). Do NOT include any greetings, introductory preamble, or conversational fluff.";
    }

    if (type === "quiz") {
      systemInstruction += " Output JSON format for a quiz with 3 multiple choice questions, each having 'question', 'options' (array of 4 strings), 'correctAnswer' (0-indexed integer), and 'explanation' (string).";
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const outputText = response.text || "";

    res.json({
      success: true,
      result: outputText,
      personalityName
    });
  } catch (error: any) {
    console.error("Error in Gemini API route:", error);
    res.status(500).json({
      error: error.message || "Failed to generate AI response",
      fallback: true
    });
  }
});

async function startServer() {
  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PakIcons server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
