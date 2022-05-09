const ProjectsPageModel = require('../models/projectsPageModel');

exports.renderProjectsPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const pageData = await ProjectsPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
    });

    res.locals.pageData = pageData;
    // console.log(res.locals);
    res.render('projectsPage');
  } catch (err) {
    console.log(err);
  }
};

//NEXT CREATE PROJECTS PAGE MODEL
