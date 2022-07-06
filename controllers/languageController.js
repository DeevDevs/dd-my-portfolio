const HFSModel = require('./../models/hfsModel');

exports.checkLanguageCookie = function (req, res, next) {
  const languageCookie = req.cookies;
  if (!languageCookie) {
    next();
  } else {
    req.languageCookie = languageCookie.mypfcookielang;
    next();
  }
};

exports.createSendLanguageCookie = function (req, res, next) {
  const currentLanguage = req.query.lang;
  if (!currentLanguage) {
    res.cookie('mypfcookielang', 'ru');
  } else {
    res.cookie('mypfcookielang', currentLanguage === 'ru' ? 'en' : 'ru');
  }
  res.status(200).json({
    status: 'success',
  });
};
