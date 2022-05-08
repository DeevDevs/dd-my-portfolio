const AboutMePageModel = require('./../models/aboutMePageModel');

exports.renderAboutMePage = async function (req, res, next) {
  try {
    // const languageCookie = req.languageCookie;
    // const pageData = await AboutMePageModel.findOne({
    //   lang: `${languageCookie ? languageCookie : 'en'}`,
    // });

    // res.locals.pageData = pageData;
    // console.log(res.locals);
    res.render('aboutMePage');
  } catch (err) {
    console.log(err);
  }
};

// exports.editModel = async function () {};
