const MainPageModel = require('./../models/mainPageModel');

exports.renderMainPage = async function (req, res, next) {
  const pageData = await MainPageModel.findOne({ lang: 'en' });
  // console.log(res.locals.hfsData);
  //   res.sendFile(path.resolve(__dirname + '/../index.html'));
  res.locals.pageData = pageData;
  // console.log(res.locals);
  res.render('mainPageView');
};

// exports.editModel = async function () {};
