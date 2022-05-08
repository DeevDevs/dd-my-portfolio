const mongoose = require('mongoose');

const mainPageSchema = new mongoose.Schema({
  lang: String,
  pageTitle: String,
  pageName: String,
  frontName: String,
  frontText: String,
  backName: String,
  backText: String,
  fullName: String,
  fullText: String,
  linkMeTitle: String,
  linkMeText: String,
  linkQualsTitle: String,
  linkQualsText: String,
  linkProjectsTitle: String,
  linkProjectsText: String,
  linkExpTitle: String,
  linkExpText: String,
  linkBtnText: String,
});

const MainPageModel = mongoose.model('MainPageContent', mainPageSchema);

module.exports = MainPageModel;
