const express = require('express');
const router = express.Router();

const renderMainPage = function (req, res, next) {
  res.sendFile(__dirname + '/../index.html');
};

router.route('/').get(renderMainPage);

module.exports = router;
