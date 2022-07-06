const VisitorMessageModel = require('./../models/visitorMessageModel');

exports.receiveMessage = async function (req, res, next) {
  try {
    const cookie = req.cookies.ftrmsgsent;
    if (cookie) throw new Error('Duplicate');
    const emailInDB = await VisitorMessageModel.findOne({ visitorEmail: req.body.visitorEmail });
    const allMessages = await VisitorMessageModel.find({});
    if (emailInDB) throw new Error('Duplicate');
    if (allMessages.length > 25) throw new Error('DB full');
    if (!emailInDB) {
      const newMessage = await VisitorMessageModel.create(req.body);
      res.cookie('ftrmsgsent', 'true').status(200).json({ message: 'success', data: newMessage });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: 'fail', errorMessage: err.message });
  }
};
