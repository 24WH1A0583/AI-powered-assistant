/**
 * ask.js
 * ----------------------------------------
 * Handles POST /api/ask
 * Receives a user question, sends it to Groq AI,
 * stores the result in MongoDB, and returns the answer.
 */

import { Router } from 'express';
import Groq from 'groq-sdk';
import Query from '../models/Query.js';

const router = Router();

/**
 * Initialize Groq client
 * Uses API key from environment variables
 */
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * POST /api/ask
 * Request Body:
 * {
 *   "question": "your question here"
 * }
 */
router.post('/', async (req, res) => {
  const { question } = req.body;

  // Validate input
  if (!question || typeof question !== 'string' || question.trim() === '') {
    return res.status(400).json({
      error: 'A non-empty question is required.',
    });
  }

  try {
    /**
     * Send request to Groq AI model
     * Model: llama-3.1-8b-instant (fast + free tier)
     */
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: question.trim(),
        },
      ],
      model: 'llama-3.1-8b-instant',
      max_tokens: 1024,
    });

    /**
     * Extract answer from response
     */
    const answer =
      completion.choices[0]?.message?.content ||
      'No response from model.';

    /**
     * Save Q&A to MongoDB
     */
    await Query.create({
      question: question.trim(),
      answer,
    });

    /**
     * Send response back to frontend
     */
    return res.status(200).json({ answer });
  } catch (err) {
    console.error('Error in /api/ask:', err.message);

    return res.status(500).json({
      error: 'Internal server error. Please try again.',
    });
  }
});

export default router;