const express = require('express');
const router = express.Router();
const hfsController = require('./../controllers/hfsController');
const projectsPageController = require('../controllers/projectsPageController');
const languageController = require('./../controllers/languageController');
const indivProjectPageController = require('./../controllers/indivProjectPageController');

router
  .route('/')
  .get(languageController.checkLanguageCookie, hfsController.addHFScontent, projectsPageController.renderProjectsPage);

router
  .route('/:project')
  .get(
    languageController.checkLanguageCookie,
    hfsController.addHFScontent,
    indivProjectPageController.renderIndivProjectPage
  );

module.exports = router;
