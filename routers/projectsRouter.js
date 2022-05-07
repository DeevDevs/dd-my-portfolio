const express = require('express');
const router = express.Router();
// const path = require('path');

const renderProjectsPage = function (req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.render('projectsPage');
};

router.route('/').get(renderProjectsPage);

module.exports = router;
