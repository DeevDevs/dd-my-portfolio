const mongoose = require('mongoose');

const hfsSchema = new mongoose.Schema({
  lang: String,
  home: String,
  aboutMe: String,
  quals: String,
  projects: String,
  exp: String,
  contact: String,
  contactText: String,
  formNamePh: String,
  formEmailPh: String,
  formMessagePh: String,
  formBtn: String,
  address: String,
  addressText: String,
  addressArea: String,
  updateDate: String,
  copyrightText: String,
});

const HFSModel = mongoose.model('hfsContent', hfsSchema);

module.exports = HFSModel;
