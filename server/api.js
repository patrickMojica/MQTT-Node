const express = require('express');

const pubsubController = require('./pubsubController');

const router = express.Router();

// router.get('/subscribe',
//   pubsubController.subscribeToTopic,
//   (req, res) => res.status(200).json(res.body)
// );

router.post('/publish',
  pubsubController.publishMQTTMessage,
  (req, res) => res.status(200).json(res.body)
);

module.exports = router;
