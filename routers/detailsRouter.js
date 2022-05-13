const express = require('express');
const languageController = require('./../controllers/languageController');
const detailsController = require('./../controllers/detailsController');

const router = express.Router();

router.route('/').get(languageController.checkLanguageCookie, detailsController.renderQualDetails);

module.exports = router;
