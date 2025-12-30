const db = require('../models/db'); // Import the db model

const submitForm = (req, res) => {
  const { name, email } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !email) {
    return res.status(400).send({ message: 'Name and email are required' });
  }

  const checkEmailQuery = 'SELECT * FROM form_data WHERE email = ?';
  db.execute(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).send({ message: 'Error checking email', error: err });
    }

    if (results.length > 0) {
      // Email already exists
      return res.status(400).send({ message: 'Email already exists' });
    }

    const query = 'INSERT INTO form_data (name, email, image) VALUES (?, ?, ?)';
    db.execute(query, [name, email, image], (err, results) => {
      if (err) {
        console.error('Error while inserting data:', err);
        return res.status(500).send({ message: 'Error saving data', error: err });
      }
      res.status(201).send({ message: 'Data saved successfully', id: results.insertId });
    });
  });
};


const getAllData = (req, res) => {
  const query = 'SELECT * FROM form_data';
  db.execute(query, (err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error fetching data', error: err });
    }
    res.status(200).json(results);
  });
};

module.exports = {
  submitForm,
  getAllData,
};
