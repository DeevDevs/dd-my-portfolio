const express = require('express');
const router = express.Router();
// const path = require('path');

const renderQualificationsPage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('qualificationsPage');
};

router.route('/').get(renderQualificationsPage);

module.exports = router;
