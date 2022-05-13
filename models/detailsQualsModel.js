const mongoose = require('mongoose');

const detailsQualsSchema = new mongoose.Schema({
  lang: String,
  qual: String,
  headline: String,
  description: String,
  imagePath: String,
});

const DetailsQualsModel = mongoose.model('detailsQuals', detailsQualsSchema);

module.exports = DetailsQualsModel;
