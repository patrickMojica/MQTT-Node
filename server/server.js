const express = require("express");
const path = require('path');
const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const PORT = process.env.PORT || 3000;

// router API
const router = require('./api');
const port = 3000;

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, './client')));
/**
 * handle parsing request body
 */
app.use(express.json());

// Serve the homepage at '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client', 'index.html'));
});

app.use("/api", router);
// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});