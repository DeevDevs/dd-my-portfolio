const express = require('express');
const router = express.Router();
const aboutMePageController = require('./../controllers/aboutMePageController');
const hfsController = require('./../controllers/hfsController');
const languageController = require('./../controllers/languageController');
// const path = require('path');

router
  .route('/')
  .get(languageController.checkLanguageCookie, hfsController.addHFScontent, aboutMePageController.renderAboutMePage);

module.exports = router;
