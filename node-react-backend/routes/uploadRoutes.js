const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// Route to handle image uploads (if separate route needed)
router.post('/upload', uploadController.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }
  res.status(200).send({ message: 'File uploaded successfully', filename: req.file.filename });
});

module.exports = router;
