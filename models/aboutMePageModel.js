const mongoose = require('mongoose');

const aboutMePageSchema = new mongoose.Schema({
  lang: String,
  pageTitle: String,
  pageName: String,
  partOneTitle: String,
  partOneText: String,
  partTwoTitle: String,
  partTwoTextOne: String,
  partTwoTextTwo: String,
  partTwoTextThree: String,
  partThreeTitle: String,
  partThreeTextOne: String,
  partThreeTextTwo: String,
  partFourTextOne: String,
  partFourTextTwo: String,
});

const AboutMePageModel = mongoose.model('AboutMePageContent', aboutMePageSchema);

module.exports = AboutMePageModel;
