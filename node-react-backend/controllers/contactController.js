// backend/controllers/contactController.js
const db = require('../models/db');

const sendMessage = (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.execute(query, [name, email, message], (err, results) => {
      if (err) {
        console.error('Error saving message:', err); // Log the error
        return res.status(500).json({ message: 'Error saving message', error: err });
      }
      res.status(200).json({ message: 'Message sent successfully', id: results.insertId });
    });
  };
  

module.exports = { sendMessage };
