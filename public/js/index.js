import SharedView from './view/sharedView.js';
import MainView from './view/mainView.js';
import ProjectsView from './view/projectsView.js';
import AboutMeView from './view/aboutmeView.js';
import ExperienceView from './view/experienceView.js';
import QualificationsView from './view/qualificationsView.js';
import IndividualView from './view/indivProjectView.js';

// const tempArr = window.location.href.split('/');
// const curPage = tempArr[tempArr.length - 1];
const thisPageIs = document.getElementById('this-page').textContent;
console.log(thisPageIs);
if (thisPageIs === 'main-page') {
  new SharedView();
  new MainView();
}
if (thisPageIs === 'about-me') {
  new SharedView();
  new AboutMeView();
}
if (thisPageIs === 'projects') {
  new SharedView();
  new ProjectsView();
}
if (thisPageIs === 'experience') {
  new SharedView();
  new ExperienceView();
}
if (thisPageIs === 'qualifications') {
  new SharedView();
  new QualificationsView();
}
if (thisPageIs === 'indiv-project') {
  new SharedView();
  new IndividualView();
}
