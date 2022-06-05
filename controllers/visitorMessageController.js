const VisitorMessageModel = require('./../models/visitorMessageModel');

exports.receiveMessage = async function (req, res, next) {
  try {
    // const message = req.body;
    const cookie = req.cookies.ftrmsgsent;
    if (cookie) throw new Error();
    const emailInDB = await VisitorMessageModel.findOne({ visitorEmail: req.body.visitorEmail });
    const allMessages = await VisitorMessageModel.find({});
    if (emailInDB || allMessages.length > 25) throw new Error('Your email is in the database');
    if (!emailInDB) {
      const newMessage = await VisitorMessageModel.create(req.body);
      // console.log(newMessage);
      res.cookie('ftrmsgsent', 'true').status(200).json({ message: 'success', data: newMessage });
      // console.log('all went well');
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'fail', errorMessage: err._message });
  }
};
