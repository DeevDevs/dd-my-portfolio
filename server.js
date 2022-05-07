const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const app = require('./app.js');

const DB = `mongodb+srv://Dmitriy:Atlas2021@myportfoliocluster.dbews.mongodb.net/myPortfolio?retryWrites=true&w=majority`;

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
