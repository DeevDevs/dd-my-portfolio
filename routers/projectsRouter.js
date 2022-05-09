const express = require('express');
const router = express.Router();
const hfsController = require('./../controllers/hfsController');
const projectsPageController = require('../controllers/projectsPageController');
const languageController = require('./../controllers/languageController');

router
  .route('/')
  .get(languageController.checkLanguageCookie, hfsController.addHFScontent, projectsPageController.renderProjectsPage);

module.exports = router;
