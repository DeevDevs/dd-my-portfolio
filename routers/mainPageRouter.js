const express = require('express');
const router = express.Router();
const mainPageController = require('./../controllers/mainPageController');
const hfsController = require('./../controllers/hfsController');
const languageController = require('./../controllers/languageController');
// const path = require('path');

// const renderMainPage = async function (req, res, next) {
//   const pageData = await MainPageModel.findOne({ lang: 'en' });
//   // console.log(pageData);
//   //   res.sendFile(path.resolve(__dirname + '/../index.html'));
//   res.locals.pageData = pageData;
//   console.log(res.locals);
//   res.render('mainPageView', {
//     title: 'Main Page',
//   });
// };

router
  .route('/')
  .get(languageController.checkLanguageCookie, hfsController.addHFScontent, mainPageController.renderMainPage);

module.exports = router;
