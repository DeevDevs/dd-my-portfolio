const mongoose = require('mongoose');

const projectsPageSchema = new mongoose.Schema({
  lang: String,
  page: String,
  pageTitle: String,
  pageName: String,
  wheelHeadDefault: String,
  projectOne: String,
  projectTwo: String,
  projectThree: String,
  projectFour: String,
  projectFive: String,
  projectSix: String,
  projectSeven: String,
  projectEight: String,
  learnMore: String,
});

const ProjectsPageModel = mongoose.model('ProjectPageContent', projectsPageSchema);

module.exports = ProjectsPageModel;
