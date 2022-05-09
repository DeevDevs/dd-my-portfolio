const QualificationsPageModel = require('../models/qualificationsPageModel');

exports.renderQualificationsPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await QualificationsPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });

    res.locals.pageData = pageData;

    res.render('qualificationsPage');
  } catch (err) {
    console.log(err);
  }
};

//NEXT CREATE PROJECTS PAGE MODEL
