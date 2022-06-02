const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({ path: `./config.env` });
// const DB = `mongodb+srv://Dmitriy:Atlas2021@myportfoliocluster.dbews.mongodb.net/myPortfolio?retryWrites=true&w=majority`;
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connections successful'));

const port = 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
