const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'products'
})

connection.connect((error) => {
  if (error) {
    console.log('error connection to mysql db: ', error);
    return;
  }
  console.log('connected to mysql');
});

module.exports = connection;