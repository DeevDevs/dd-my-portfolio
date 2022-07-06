const AboutMePageModel = require('./../models/aboutMePageModel');

exports.renderAboutMePage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await AboutMePageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });
    res.locals.pageData = pageData;
    res.render('aboutMePage');
  } catch (err) {
    console.log(err); // add here an error controller
  }
};
