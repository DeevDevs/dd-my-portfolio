const mongoose = require('mongoose');

const detailsProjectsSchema = new mongoose.Schema({
  lang: String,
  prnumber: Number,
  detailsLeft: String,
  detailsRight: String,
});

const DetailsProjectsModel = mongoose.model('detailsProjects', detailsProjectsSchema);

module.exports = DetailsProjectsModel;
