const HFSModel = require('./../models/hfsModel');

exports.checkLanguageCookie = function (req, res, next) {
  const languageCookie = req.cookies;
  // console.log(languageCookie);
  if (!languageCookie) {
    next();
  } else {
    req.languageCookie = languageCookie.mypfcookielang;
    next();
  }
};

exports.createSendLanguageCookie = function (req, res, next) {
  // console.log(req.query);
  // console.log('Getting Cookies through axios');
  const currentLanguage = req.query.lang;
  // const currentPage = req.query.page;
  if (!currentLanguage) {
    res.cookie('mypfcookielang', 'ru');
  } else {
    res.cookie('mypfcookielang', currentLanguage === 'ru' ? 'en' : 'ru');
  }

  res.status(200).json({
    status: 'success',
  });
};
