const express = require('express');
const router = express.Router();
// const path = require('path');

const renderExperiencePage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('experiencePage');
};

router.route('/').get(renderExperiencePage);

module.exports = router;
