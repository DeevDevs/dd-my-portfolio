const IndivProjectPageModel = require('../models/indivProjectPageModel');

exports.renderIndivProjectPage = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const chosenProject = req.params.project;
    const pageData = await IndivProjectPageModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
      projectName: `${chosenProject}`,
    });
    res.locals.pageData = pageData;
    res.render('indivProjectPage');
  } catch (err) {
    console.log(err);
  }
};
