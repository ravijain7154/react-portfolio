const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Define storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Save the file with a timestamp
  },
});

const upload = multer({ storage });

// Ensure the 'uploads' folder exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

module.exports = upload;
