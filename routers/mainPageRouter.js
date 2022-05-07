const express = require('express');
const router = express.Router();
const path = require('path');

const renderMainPage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('mainPageView');
};

router.route('/').get(renderMainPage);

module.exports = router;
