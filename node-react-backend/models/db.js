const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to DB', err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = db;
