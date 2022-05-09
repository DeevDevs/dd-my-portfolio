const ExperiencePageModel = require('./../models/experiencePageModel');

exports.renderExperiencePage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await ExperiencePageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });

    res.locals.pageData = pageData;
    // console.log(res.locals);
    res.render('experiencePage');
  } catch (err) {
    console.log(err);
  }
};

//NEXT CREATE PROJECTS PAGE MODEL
