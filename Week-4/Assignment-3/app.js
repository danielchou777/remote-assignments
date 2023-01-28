const express = require('express');
const { register, getUser } = require('./database.js');
const path = require('path');
const createError = require('http-errors');

const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.status(200).render('signup');
});

app.post('/register', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await register(email, password);
    res.status(200).render('member', { email: user.email });
  } catch (err) {
    // handle duplicate entry error from mysql
    if (err.errno === 1062) {
      err.status = 400;
    }
    next(err);
  }
});

app.get('/login', (req, res) => {
  res.status(200).render('signin');
});

app.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUser(email, password);
    if (user) {
      res.status(200).render('member', { email: user.email });
    } else {
      const err = Error('Incorrect email or password, please try again');
      err.status = 401;
      throw err;
    }
  } catch (err) {
    next(err);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', { error: err.message });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
