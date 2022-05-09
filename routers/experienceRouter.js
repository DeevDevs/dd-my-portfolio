const express = require('express');
const router = express.Router();
const experiencePageController = require('./../controllers/experiencePageController');
const hfsController = require('./../controllers/hfsController');
const languageController = require('./../controllers/languageController');

// const renderExperiencePage = function (req, res, next) {
//   //   res.sendFile(path.resolve(__dirname + '/../index.html'));
//   res.render('experiencePage');
// };

router
  .route('/')
  .get(
    languageController.checkLanguageCookie,
    hfsController.addHFScontent,
    experiencePageController.renderExperiencePage
  );

module.exports = router;
