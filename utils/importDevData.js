const fs = require('fs');
const mongoose = require('mongoose');

// const dotenv = require('dotenv');

const MainPageModel = require('./../models/mainPageModel');
const HFSModel = require('./../models/hfsModel');
const AboutMePageModel = require('./../models/aboutMePageModel');
// const Review = require('./../../models/reviewModel');
// const User = require('./../../models/userModel');

// dotenv.config({ path: `./../config.env` });

const DB = `mongodb+srv://Dmitriy:Atlas2021@myportfoliocluster.dbews.mongodb.net/myPortfolio?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connections successful'));

//Read json file
const mainPages = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/main-page.json`, 'UTF-8'));
const hfsContent = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/hfs.json`, 'UTF-8'));
const aboutMePageContent = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/about-me-page.json`, 'UTF-8'));

//import data into database
const importData = async () => {
  try {
    // await MainPageModel.create(mainPages);
    // await HFSModel.create(hfsContent);
    await AboutMePageModel.create(aboutMePageContent);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//delete old data
const deleteData = async () => {
  try {
    // await MainPageModel.deleteMany();
    // await HFSModel.deleteMany();
    await AboutMePageModel.deleteMany();
    console.log('Data successfully deleted');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// executing --> node dev-data/data/importDevData.js --import
//this method displays the location of node.exe, that executes the code, and the path to the code file itself
// console.log(process.argv); // ['C:\\Program Files\\nodejs\\node.exe', 'D:\\My Web\\complete-node-bootcamp-master\\4-natours\\starter\\dev-data\\data\\importDevData.js', --import]

//So, if the third argument is --import, then the data is imported... I can also make that argument --delete, then the data will be deleted
if (process.argv[2] === '--import') {
  importData(); //it imports data from the data files in the dev-data
} else if (process.argv[2] === '--delete') {
  deleteData(); //it deletes all the data in the database
}
