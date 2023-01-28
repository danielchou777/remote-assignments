const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getUser(email, password) {
  if (validateEmail(email) && email && password) {
    const [rows] = await pool.query(
      `SELECT * FROM user WHERE email = ? AND password = ?`,
      [email, password]
    );
    return rows[0];
  } else {
    const err = new Error('Invalid Email address or password');
    err.status = 400;
    throw err;
  }
}

async function register(email, password) {
  if (validateEmail(email) && email && password) {
    const [result] = await pool.query(
      `INSERT INTO user (email, password) 
    VALUES (?, ?)`,
      [email, password]
    );
    const id = result.insertId;

    if (id) {
      const user = await getUser(email, password);
      return user;
    }
  } else {
    const err = new Error('Invalid Email address or password');
    err.status = 400;
    throw err;
  }
}

module.exports = { getUser, register };
