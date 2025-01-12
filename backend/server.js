// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
// const userRoutes = require('./routes/userRoutes');
// const postRoutes = require('./routes/postRoutes');

// Use routes
// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);

//start up 
app.get("/",(req, res)=>{
  res.send("hello")
})
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
