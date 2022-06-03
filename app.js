const express = require('express');
const path = require('path');

const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

const mainPageRouter = require('./routers/mainPageRouter.js');
const aboutMeRouter = require('./routers/aboutMeRouter.js');
const qualificationsRouter = require('./routers/qualificationsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');
const experienceRouter = require('./routers/experienceRouter.js');
// const indivProjectRouter = require('./routers/indivProjectRouter.js');
const detailsRouter = require('./routers/detailsRouter.js');
const cookieParser = require('cookie-parser');

const languageController = require('./controllers/languageController');
const visitorMessageController = require('./controllers/visitorMessageController');

const app = express();

app.enable('trust proxy');

app.use(express.json({ limit: '20kb' }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors());

app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(mongoSanitize());
app.use(xss());

//this middleware here is to PROCESS DATA FROM THE SUBMITTED FORM... it kinda makes the encoded data available
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//this middleware LIMITING REQUESTS
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in 1 hour!',
});
//here, we only address the routes that start with '/ api'
app.use('*', limiter);

app.use('/', mainPageRouter);
app.use('/main-page', mainPageRouter);
app.use('/about-me', aboutMeRouter);
app.use('/qualifications', qualificationsRouter);
app.use('/projects', projectsRouter);
app.use('/experience', experienceRouter);
// app.use('/indivproject', indivProjectRouter);

// const languageController = require('./controllers/languageController');
// const visitorMessageController = require('./controllers/visitorMessageController');
app.use('/switch-language', languageController.createSendLanguageCookie);
app.use('/details', detailsRouter);
app.post('/message', visitorMessageController.receiveMessage);

module.exports = app;
