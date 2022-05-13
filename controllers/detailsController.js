const DetailsQualsModel = require('./../models/detailsQualsModel');
const DetailsProjectsModel = require('./../models/detailsProjectsModel');

const renderQualDetails = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const chosenQual = req.query.id;
    // console.log(chosenQual);
    const detailsData = await DetailsQualsModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
      qual: chosenQual,
    });
    // console.log(detailsData);

    res.status(200).json({
      message: 'success',
      detailsData,
    });
  } catch (err) {
    console.log(err);
  }
};

const renderProjectDetails = async function (req, res, next) {
  try {
    const languageCookie = req.languageCookie;
    const chosenProject = req.query.prnumber;
    // console.log(chosenQual);
    const detailsData = await DetailsProjectsModel.findOne({
      lang: `${languageCookie ? languageCookie : 'en'}`,
      prnumber: chosenProject,
    });
    // console.log(detailsData);

    res.status(200).json({
      message: 'success',
      detailsData,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.renderDetails = async function (req, res, next) {
  if (req.query.id) await renderQualDetails(req, res, next);
  if (req.query.prnumber) await renderProjectDetails(req, res, next);
};
