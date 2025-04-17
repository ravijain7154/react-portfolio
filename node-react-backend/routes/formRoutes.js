const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const uploadController = require('../controllers/uploadController');
// const sendMessage  = require('../controllers/contactController');

// Route for form submission with file upload
router.post('/submit', uploadController.single('image'), formController.submitForm);

// Route to fetch all form data
router.get('/data', formController.getAllData);

//  send message


module.exports = router;
