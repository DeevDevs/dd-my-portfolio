const DetailsQualsModel = require('./../models/detailsQualsModel');

exports.renderQualDetails = async function (req, res, next) {
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
