
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import routerAgent from "../agents/routerAgent.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await routerAgent(message);
    res.json({ reply });
  } catch (error) {
    console.error("FULL ERROR:", error);
    res.json({ reply: "Error processing request" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
