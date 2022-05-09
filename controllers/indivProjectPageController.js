const IndivProjectPageModel = require('../models/indivProjectPageModel');

exports.renderIndivProjectPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await IndivProjectPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });
    console.log(pageData);
    res.locals.pageData = pageData;
    // console.log(res.locals);
    res.render('indivProjectPage');
  } catch (err) {
    console.log(err);
  }
};
