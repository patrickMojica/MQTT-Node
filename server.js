const express = require("express");
const path = require('path');
const app = express();
// const router = require('./api');
// const dotenv = require('dotenv');
// const PORT = process.env.PORT || 3000;
const port = 3000;


// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, './client')));

// Serve the homepage at '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client', 'index.html'));
});

//routes
const subscriberRouter = require("./routes/subscribe");
const publisherRouter = require("./routes/publish");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/subscribe", subscriberRouter);
app.use("/publish", publisherRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//module.exports = app;