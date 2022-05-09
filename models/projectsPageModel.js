const mongoose = require('mongoose');

const projectsPageSchema = new mongoose.Schema({
  lang: String,
  page: String,
  pageTitle: String,
  pageName: String,
  wheelHeadDefault: String,
});

const ProjectsPageModel = mongoose.model('ProjectPageContent', projectsPageSchema);

module.exports = ProjectsPageModel;
