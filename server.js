const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({ path: `./config.env` });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connections successful'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Related to SIGTERM from HEROKU
process.on('SIGTERM', () => {
  console.log('SIGTERM received. SHUTTING DOWN gracefully...');
  server.close(() => {
    console.log('Process terminated!');
  });
});
