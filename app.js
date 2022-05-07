const express = require('express');
const path = require('path');
const mainPageRouter = require('./routers/mainPageRouter.js');
// const compression = require('compression');

const app = express();

app.use(express.json({ limit: '10kb' }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const sayHello = function (req, res, next) {
  console.log('HELLO');
  res.status(200).json({ status: 'success', data: { somedata: 'data' } });
  //   next();
};

const router = express.Router();

router.route('/').get(sayHello);

app.use('/main-page', mainPageRouter);
app.use('/say-hello', router);

module.exports = app;
