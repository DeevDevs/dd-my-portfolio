const express = require('express');
const router = express.Router();
// const path = require('path');

const renderIndivProjectPage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('indivProjectPage');
};

router.route('/').get(renderIndivProjectPage);

module.exports = router;
