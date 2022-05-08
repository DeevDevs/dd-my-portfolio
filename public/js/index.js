import SharedView from './view/sharedView.js';
import MainView from './view/mainView.js';
import ProjectsView from './view/projectsView.js';
import AboutMeView from './view/aboutmeView.js';

const tempArr = window.location.href.split('/');
const curPage = tempArr[tempArr.length - 1];

if (curPage === 'main-page') {
  new SharedView();
  new MainView();
}
if (curPage === 'about-me') {
  new SharedView();
  new AboutMeView();
}
// if (curPage === 'main-page') {
//   new SharedView();
//   new MainView();
// }
