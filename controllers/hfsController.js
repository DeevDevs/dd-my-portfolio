const HFSModel = require('./../models/hfsModel');

exports.addHFScontent = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const HFScontent = await HFSModel.findOne({ lang: `${languageCookie ? languageCookie : 'en'}` });
    res.locals.hfsData = HFScontent;
    next();
  } catch (err) {
    console.log(err); // add here an error controller
  }
};
