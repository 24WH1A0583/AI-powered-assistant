/**
 * index.js
 * ----------------------------------------
 * Entry point of the backend server.
 * Sets up Express app, middleware, routes,
 * connects to database, and starts server.
 */

import 'dotenv/config'; // Loads environment variables
import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import askRouter from './routes/ask.js';

const app = express();

/**
 * Port configuration
 * Uses PORT from .env or defaults to 3000
 */
const PORT = process.env.PORT || 3000;

/**
 * Middleware
 */

// Enable CORS (allow frontend to talk to backend)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['POST'],
  })
);

// Parse JSON request bodies
app.use(express.json());

/**
 * Routes
 */

// Main API route
app.use('/api/ask', askRouter);

// Health check route (for testing server)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

/**
 * Start server
 * First connect to DB, then start listening
 */
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});