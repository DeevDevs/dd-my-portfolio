const MainPageModel = require('./../models/mainPageModel');

exports.renderMainPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await MainPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });
    res.locals.pageData = pageData;
    res.render('mainPageView');
  } catch (err) {
    console.log(err);
  }
};
