const mongoose = require('mongoose');

const indivProjectPageSchema = new mongoose.Schema({
  lang: String,
  page: String,
  projectName: String,
  pageName: String,
  btnScroll: String,
  coverTitle: {
    type: String,
    uppercase: true,
  },
  coverImg: String,
  generalText: String,
  generalImgLeft: String,
  generalImgRight: String,
  behindText: [String],
  behindImg: String,
  gitLink: String,
  projectLink: String,
  respText: [String],
  respImg: String,
});

const IndivProjectPageModel = mongoose.model('indivProjectsContent', indivProjectPageSchema);

module.exports = IndivProjectPageModel;
