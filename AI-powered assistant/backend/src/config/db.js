/**
 * db.js
 * ----------------------------------------
 * Handles connection to MongoDB using Mongoose.
 * This function is called once when the server starts.
 * If connection fails → server exits.
 */

import mongoose from 'mongoose';

/**
 * connectDB
 * Establishes connection with MongoDB Atlas using the URI
 * stored in environment variables.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // Log success message
    console.log('MongoDB connected');
  } catch (err) {
    // Log error if connection fails
    console.error('MongoDB connection error:', err.message);

    // Exit process (backend shouldn't run without DB)
    process.exit(1);
  }
};

export default connectDB;