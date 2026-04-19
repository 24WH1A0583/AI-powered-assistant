/**
 * Query.js
 * ----------------------------------------
 * Defines the schema for storing user questions
 * and AI-generated answers in MongoDB.
 */

import mongoose from 'mongoose';

/**
 * QuerySchema
 * Represents one question-answer interaction.
 */
const QuerySchema = new mongoose.Schema(
  {
    // User's input question
    question: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },

    // AI-generated answer
    answer: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically adds createdAt & updatedAt fields
    timestamps: true,
  }
);

/**
 * Export model
 * MongoDB collection name → "queries"
 */
export default mongoose.model('Query', QuerySchema);