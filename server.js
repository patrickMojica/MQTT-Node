const express = require("express");
const app = express();
// const router = require('./api');
// const dotenv = require('dotenv');
// const PORT = process.env.PORT || 3000;
const port = 3000;
//routes
const subscriberRouter = require("./routes/subscribe");
const publisherRouter = require("./routes/publish");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/subscriber", subscriberRouter);
app.use("/publisher", publisherRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//module.exports = app;