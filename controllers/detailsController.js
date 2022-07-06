const DetailsQualsModel = require('./../models/detailsQualsModel');
const DetailsProjectsModel = require('./../models/detailsProjectsModel');

const renderQualDetails = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const chosenQual = req.query.id;
    const detailsData = await DetailsQualsModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
      qual: chosenQual,
    });
    res.status(200).json({
      message: 'success',
      detailsData,
    });
  } catch (err) {
    console.log(err); // add here an error controller
  }
};

const renderProjectDetails = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const chosenProject = req.query.prnumber;
    const detailsData = await DetailsProjectsModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
      prnumber: chosenProject,
    });
    res.status(200).json({
      message: 'success',
      detailsData,
    });
  } catch (err) {
    console.log(err); // add here an error controller
  }
};

exports.renderDetails = async function (req, res, next) {
  try {
    if (req.query.id) await renderQualDetails(req, res, next);
    if (req.query.prnumber) await renderProjectDetails(req, res, next);
  } catch (err) {
    console.log(err); // add here an error controller
  }
};
