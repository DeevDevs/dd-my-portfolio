const HFSModel = require('./../models/hfsModel');

exports.addHFScontent = async function (req, res, next) {
  const languageCookie = req.languageCookie;
  const HFScontent = await HFSModel.findOne({ lang: `${languageCookie ? languageCookie : 'en'}` });
  res.locals.hfsData = HFScontent;
  next();
};
