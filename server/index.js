const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

// logging middleware
app.use(morgan('dev'));

// parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files from public
app.use('/public', express.static('public'));

// Here is where we would add API routes if needed

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// send back index.html
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../index.html'));
});

// last stop, 404
app.use((req, res) => {
  res.sendStatus(404);
});

// server listening!
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


