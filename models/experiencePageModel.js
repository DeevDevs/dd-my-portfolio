const mongoose = require('mongoose');

const experiencePageSchema = new mongoose.Schema({
  lang: String,
  page: String,
  pageTitle: String,
  pageName: String,
  message: String,
});

const ExperiencePageModel = mongoose.model('ExperiencePageContent', experiencePageSchema);

module.exports = ExperiencePageModel;
