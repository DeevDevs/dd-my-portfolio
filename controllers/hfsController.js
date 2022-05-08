const HFSModel = require('./../models/hfsModel');

exports.addHFScontent = async function (req, res, next) {
  const HFScontent = await HFSModel.findOne({ lang: 'en' });
  res.locals.hfsData = HFScontent;
  next();
};
