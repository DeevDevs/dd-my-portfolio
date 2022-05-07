const express = require('express');
const router = express.Router();
// const path = require('path');

const renderAboutMePage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('aboutMePage');
};

router.route('/').get(renderAboutMePage);

module.exports = router;
