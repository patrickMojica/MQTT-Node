const express = require("express");
const router = express.Router();

var subscriberController = require("../controller/subscriber");

router.get("/", subscriberController.getSubscriberPage);

module.exports = router;