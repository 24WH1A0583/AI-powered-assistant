# AI-Powered Assistant

## Project Overview

The AI-Powered Assistant is a full-stack web application that allows users to ask questions and receive intelligent responses in real time using an AI model.

The application consists of:

* A frontend built with React and Vite for user interaction
* A backend built with Node.js and Express for handling API requests
* A MongoDB database for storing data
* Integration with an AI service (Groq API) for generating responses

---

## Features

* Simple user interface to ask questions
* Real-time AI-generated responses
* REST API for communication between frontend and backend
* Modular architecture with separate frontend and backend
* Supports both local MongoDB and MongoDB Atlas

---

## Tech Stack

### Frontend

* React (Vite)
* JavaScript
* HTML, CSS

### Backend

* Node.js
* Express.js
* Bun runtime

### Database

* MongoDB (Local and Atlas)

### AI Integration

* Groq API

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-link>
cd AI-powered-assistant
```

---

### 2. Backend Setup

```bash
cd backend
bun install
```

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/cognitia
PORT=3000
GROQ_API_KEY=your_api_key_here
```

---

### 3. Start MongoDB (Local)

```bash
cd "C:\Program Files\MongoDB\Server\8.2\bin"
mongod
```

---

### 4. Run Backend

```bash
bun run dev
```

---

### 5. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

### 6. Open Application

Open the following URL in your browser:

```
http://localhost:5173
```

---

## Deployment

### Requirements

* Frontend and backend must be deployed separately
* Both must exist inside the same GitHub repository
* Use Vercel for deployment

---

### Backend Deployment (Vercel)

1. Import the repository into Vercel
2. Set Root Directory to `backend`
3. Add environment variables:

   * MONGODB_URI (MongoDB Atlas connection string)
   * GROQ_API_KEY
4. Add a `vercel.json` file inside backend:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.js"
    }
  ]
}
```

---

### Frontend Deployment (Vercel)

1. Import the same repository again
2. Set Root Directory to `frontend`
3. Update API URL in frontend code:

```js
fetch("https://your-backend.vercel.app/api/ask")
```

4. Deploy

---

## API Usage

### Base URL

```
http://localhost:3000
```

---

### Health Check

**GET** `/health`

Response:

```json
{
  "status": "ok"
}
```

---

### Ask AI

**POST** `/api/ask`

Request:

```json
{
  "question": "What is AI?"
}
```

Response:

```json
{
  "answer": "Artificial Intelligence (AI) refers to..."
}
```

---

## Project Structure

```
AI-powered-assistant/
│
├── backend/
│   ├── src/
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Important Notes

* MongoDB must be running for local development
* Use MongoDB Atlas for deployment
* Backend must be running before frontend
* Ensure CORS is enabled in the backend

---

## Future Improvements

* Store chat history in database
* Add user authentication
* Improve UI to a chat-style interface
* Enhance error handling and logging

---

## Author

* CH.Charvi
* 24WH1A0583
