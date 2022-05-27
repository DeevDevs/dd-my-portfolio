const VisitorMessageModel = require('./../models/visitorMessageModel');

exports.receiveMessage = async function (req, res, next) {
  try {
    // const message = req.body;
    const cookie = req.cookies.ftrmsgsent;
    console.log(cookie);
    if (cookie) throw new Error();
    const emailInDB = await VisitorMessageModel.findOne({ visitorEmail: req.body.visitorEmail });
    if (emailInDB) throw new Error();
    if (!emailInDB) {
      const newMessage = await VisitorMessageModel.create(req.body);
      // console.log(newMessage);
      res.cookie('ftrmsgsent', 'true').status(200).json({ message: 'success', data: newMessage });
      // console.log('all went well');
    }
  } catch (err) {
    // console.log('smth went wrong');
    res.status(400).json({ message: 'fail' });
  }
};
