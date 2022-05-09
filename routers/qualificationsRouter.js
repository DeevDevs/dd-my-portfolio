const express = require('express');
const router = express.Router();
const hfsController = require('./../controllers/hfsController');
const qualificationsPageController = require('./../controllers/qualificationsPageController');
const languageController = require('./../controllers/languageController');

router
  .route('/')
  .get(
    languageController.checkLanguageCookie,
    hfsController.addHFScontent,
    qualificationsPageController.renderQualificationsPage
  );

module.exports = router;
