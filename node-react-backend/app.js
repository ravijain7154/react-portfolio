const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer  = require('multer')
const path = require('path')
// const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',  // Replace with the frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
})



db.connect((err) => {
    if(err){
        console.error('error to connecting db', err);
    } else{
        console.log('connected');
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');  // Uploads folder for storing images
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, Date.now() + ext);  // Save the file with a timestamp
    },
  });
  
  const upload = multer({ storage });
  
  // Ensure 'uploads' folder exists

  if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
  }


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.post('/submit', upload.single('image'), (req, res) => {
  
  console.log('Uploaded file:', req.file); 

    const { name, email } = req.body;
    const image = req.file ? req.file.filename : null;  
    if (!name || !email) {
        return res.status(400).send({ message: 'Name and email are required' });
      }
    
    const query = 'INSERT INTO form_data (name, email, image) VALUE (?, ?, ?)';
    db.execute(query, [name, email, image], (err, results) => {
        if(err){
            console.error('Error while inserting data:', err);
            return res.status(500).send({message: 'error saving data', error: err });
        }
        res.status(201).send({message: 'Data saved successfully', id: results.insertId });
    });
});

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM form_data';
    db.execute(query, (err, results) => {
        if (err) {
          return res.status(500).send({ message: 'Error fetching data', error: err });
        }
        res.status(200).json(results);
      });
  });

// const path = require('path');
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(express.static(path.join(__dirname, 'node-react-frontend/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'node-react-frontend/build', 'index.html'));
});

// Middleware to handle JSON data

// Test Route
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
