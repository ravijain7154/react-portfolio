const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// Import routes
const formRoutes = require('./routes/formRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const contactRoutes = require('./routes/contactRoutes');


// Enable CORS for the frontend
app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse JSON 
app.use(express.json());

// app.use(bodyParser.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the form and upload routes
app.use('/api', formRoutes);
app.use('/api', contactRoutes);


app.use('/upload', uploadRoutes);

// Serve React app (if it's built)
app.use(express.static(path.join(__dirname, 'node-react-frontend/build')));

// Catch-all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'node-react-frontend/build', 'index.html'));
});

// Test Route
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
