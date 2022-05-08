const MainPageModel = require('./../models/mainPageModel');

exports.renderMainPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    // console.log(languageCookie);
    // const pageData = await MainPageModel.findOne({
    //   lang: `${currentLanguageCookie ? currentLanguageCookie.mypfcookielang : 'en'}`,
    // });
    const pageData = await MainPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });

    res.locals.pageData = pageData;
    // console.log(res.locals);
    res.render('mainPageView');
  } catch (err) {
    console.log(err);
  }
};

// exports.editModel = async function () {};
