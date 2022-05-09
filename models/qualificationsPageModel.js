const mongoose = require('mongoose');

const qualificationsPageSchema = new mongoose.Schema({
  lang: String,
  page: String,
  pageTitle: String,
  pageName: String,
  itExpPackTitle: String,
  itExpTitle: String,
  allExpPackTitle: String,
  allExpTitle: String,
  stOneTitle: String,
  stTwoTitle: String,
  stThreeTitle: String,
  stFourTitle: String,
  stFiveTitle: String,
  stSixTitle: String,
  stSevenTitle: String,
  stEightTitle: String,
  stNineTitle: String,
});

const QualificationsPageModel = mongoose.model('QualificationsPageContent', qualificationsPageSchema);

module.exports = QualificationsPageModel;
