var express = require('express');
var router = express.Router();

router.get('/message', (req, res) => {
  res.json({ message: "Hi what's up?" });
});

module.exports = router;
