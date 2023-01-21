const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

const sumOfNTerms = (n) => ((n + 1) * n) / 2;

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => res.status(200).send('<h1>Hello World!</h1>'));

app.get('/data', (req, res) => {
  let { number } = req.query;
  if (!number) {
    return res.status(400).send('<h1>Lack of Parameter</h1>');
  }
  number = Number(number);
  if (!Number.isInteger(number) || number <= 0) {
    return res.status(400).send('<h1>Wrong Parameter</h1>');
  }
  const sum = sumOfNTerms(number);
  return res.status(200).json({ sum });
});

app.get('/myName', (req, res) => {
  const { username } = req.cookies;
  if (username) {
    return res
      .status(200)
      .send(`<h1>Hi ${username}, welcome to the site!</h1>`);
  }
  return res.status(200).sendFile(path.join(`${__dirname}/public/myName.html`));
});

app.get('/trackName', (req, res) => {
  const { username } = req.query;
  res.cookie('username', username).redirect(302, '/myName');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
