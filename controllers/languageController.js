const HFSModel = require('./../models/hfsModel');

exports.createSendLanguageCookie = function (req, res, next) {
  console.log(req.query);
  const currentLanguage = req.query.lang;
  const currentPage = req.query.page;
  res.status(200).json({
    status: 'success',
  });
};
