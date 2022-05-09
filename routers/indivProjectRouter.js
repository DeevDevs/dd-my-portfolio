const express = require('express');
const router = express.Router();
const indivProjectPageController = require('./../controllers/indivProjectPageController');
const hfsController = require('./../controllers/hfsController');
const languageController = require('./../controllers/languageController');

router
  .route('/')
  .get(
    languageController.checkLanguageCookie,
    hfsController.addHFScontent,
    indivProjectPageController.renderIndivProjectPage
  );

module.exports = router;
