const express = require("express");
const router = express.Router();

var publisherController = require("../controller/publisher");

router.get("/", publisherController.getPublisherPage);

router.post("/", publisherController.publishMQTTMessage);

module.exports = router;
