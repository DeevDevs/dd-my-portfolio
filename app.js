const express = require('express');
const path = require('path');
const mainPageRouter = require('./routers/mainPageRouter.js');
const aboutMeRouter = require('./routers/aboutMeRouter.js');
const qualificationsRouter = require('./routers/qualificationsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');
const experienceRouter = require('./routers/experienceRouter.js');
const indivProjectRouter = require('./routers/indivProjectRouter.js');
const languageRouter = require('./routers/languageRouter.js');

// const compression = require('compression');

const app = express();

app.use(express.json({ limit: '10kb' }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// const sayHello = function (req, res, next) {
//   console.log('HELLO');
//   res.status(200).json({ status: 'success', data: { somedata: 'data' } });
//   //   next();
// };

// const router = express.Router();

// router.route('/').get(sayHello);

app.use('/main-page', mainPageRouter);
app.use('/about-me', aboutMeRouter);
app.use('/qualifications', qualificationsRouter);
app.use('/projects', projectsRouter);
app.use('/experience', experienceRouter);
app.use('/indivproject', indivProjectRouter);

const languageController = require('./controllers/languageController');
app.use('/switch-language', languageController.createSendLanguageCookie);
// app.use('/say-hello', router);

module.exports = app;
