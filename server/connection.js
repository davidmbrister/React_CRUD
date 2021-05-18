const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port:'3306',
  user: 'student',
  password: 'student',
  database: 'reactFinal' // change to reactFinal
});

connection.connect();

module.exports = connection;