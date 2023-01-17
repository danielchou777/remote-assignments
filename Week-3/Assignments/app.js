const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

const sumOfNTerms = (n) => ((n + 1) * n) / 2;

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => res.status(200).send('<h1>Hello Wolrd!</h1>'));

app.get('/data', (req, res) => {
  let { number } = req.query;
  number = Number(number);
  const sum = sumOfNTerms(number);

  if (!Number.isNaN(number) && !number) {
    return res.status(200).send('<h1>Lack of Parameter</h1>');
  }
  if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    return res.status(200).send('<h1>Wrong Parameter</h1>');
  }
  return res.status(200).json({ sum });
});

app.get('/myName', (req, res) => {
  const { name } = req.cookies;
  if (name) {
    return res.status(200).send(`<h1>Hi ${name}, welcome to the site!</h1>`);
  }
  return res.status(200).sendFile(path.join(`${__dirname}/public/myName.html`));
});

app.get('/trackName', (req, res) => {
  const { name } = req.query;
  console.log(name);
  return res
    .status(201)
    .cookie('name', name, {
      httpOnly: true,
    })
    .json({ name });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
