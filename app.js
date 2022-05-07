const express = require('express');
const path = require('path');
const mainPageRouter = require('./server/mainPageRouter.js');
// const compression = require('compression');

const app = express();

app.use(express.json({ limit: '10kb' }));
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname)));

app.use('/', mainPageRouter);

const sayHello = function (req, res, next) {
  console.log('HELLO');
  res.status(200).json({ status: 'success', data: { somedata: 'data' } });
  //   next();
};

const router = express.Router();

router.route('/').get(sayHello);

app.use('/', router);

module.exports = app;
