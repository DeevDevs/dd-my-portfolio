import SharedView from './view/sharedView.js';
import MainView from './view/mainView.js';
import ProjectsView from './view/projectsView.js';
import AboutMeView from './view/aboutmeView.js';
import ExperienceView from './view/experienceView.js';
import QualificationsView from './view/qualificationsView.js';
import IndividualView from './view/indivProjectView.js';

// const tempArr = window.location.href.split('/');
// const curPage = tempArr[tempArr.length - 1];

const pageSharedView = new SharedView();
const currentTheme = localStorage.getItem('myFolioDark');
if (currentTheme === 'enabled') {
  pageSharedView._changeTheme();
}

const thisPageIs = document.getElementById('this-page').textContent;
// console.log(thisPageIs);
if (thisPageIs === 'main-page') {
  new MainView();
}
if (thisPageIs === 'about-me') {
  new AboutMeView();
}
if (thisPageIs === 'projects') {
  new ProjectsView();
}
if (thisPageIs === 'experience') {
  new ExperienceView();
}
if (thisPageIs === 'qualifications') {
  new QualificationsView();
}
if (thisPageIs === 'indiv-project') {
  new IndividualView();
}

if (currentTheme === 'enabled') {
  pageSharedView._changeIcons();
}
