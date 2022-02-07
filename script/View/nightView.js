class ThemeSwitcher {
  header = document.querySelector('.header-menu');
  logo = document.querySelector('.logo');
  sideMenu = document.querySelector('.side-menu');
  footer = document.querySelector('.footer-menu');
  sectionsAdvert = document.querySelectorAll('.advert__section');
  advertImages = document.querySelectorAll('.advert__section--image-container');
  sectionsMain = document.querySelectorAll('.sec__main');
  sectionAbout = document.querySelector('.about-me');
  sectionLearning = document.querySelector('.learning');
  sectionProjects = document.querySelector('.projects');
  sectionExperience = document.querySelector('.experience');
  aboutMeIcon = document.querySelector('.about-me__icon');
  learningIcon = document.querySelector('.learning__icon');
  projectsIcon = document.querySelector('.projects__icon');
  experienceIcon = document.querySelector('.experience__icon');
  learnArrow = document.querySelectorAll('.sec__btn--arrow');
  learnCircle = document.querySelectorAll('.sec__btn--circle');
  sectionArrowLeft = document.querySelector('.arrow-left');
  sectionArrowRight = document.querySelector('.arrow-right');
  welcomeSection = document.querySelector('.welcome-section');
  spinningBoxImages = document.querySelectorAll('.spin-image');
  theme = 'day';

  switchTheme() {
    document.body.classList.toggle('bg-main');
    document.body.classList.toggle('text-main');
    this.header.classList.toggle('bg-main');
    this.sideMenu.classList.toggle('bg-secondary');
    this.welcomeSection.classList.toggle('welcome-night');
    this.sectionsAdvert.forEach((section) => {
      section.classList.toggle('bg-background');
    });
    this.advertImages.forEach((image) => {
      image.classList.toggle('shadow-night');
    });
    this.spinningBoxImages.forEach((image) => {
      image.classList.toggle('shadow-night');
    });
    this.sectionAbout.classList.toggle('about-me-dark');
    this.sectionLearning.classList.toggle('learning-dark');
    this.sectionProjects.classList.toggle('projects-dark');
    this.sectionExperience.classList.toggle('experience-dark');
    if (this.theme === 'day') {
      this.logo.src = './images/icons/logo-box-night.svg';
      this.aboutMeIcon.src = './images/icons/icon-me-night.svg';
      this.learningIcon.src = './images/icons/learning-icon-night.svg';
      this.projectsIcon.src = './images/icons/projects-icon-night.svg';
      this.experienceIcon.src = './images/icons/experience-icon-night.svg';
      this.sectionArrowRight.src = './images/icons/l-arrow-right-night.svg';
      this.sectionArrowLeft.src = './images/icons/l-arrow-left-night.svg';
      this.learnCircle.forEach((instance) => {
        instance.src = './images/icons/icon-circle-night.svg';
      });
      this.learnArrow.forEach((instance) => {
        instance.src = './images/icons/icon-arrow-night.svg';
      });
      this.spinningBoxImages.forEach((instance) => (instance.src = './images/icons/logo-squared-night.svg'));
    }
    if (this.theme === 'night') {
      this.spinningBoxImages.src = './images/icons/logo-squared-day.svg';
      this.logo.src = './images/icons/logo-box-day.svg';
      this.aboutMeIcon.src = './images/icons/icon-me-day.svg';
      this.learningIcon.src = './images/icons/learning-icon-day.svg';
      this.projectsIcon.src = './images/icons/projects-icon-day.svg';
      this.experienceIcon.src = './images/icons/experience-icon-day.svg';
      this.sectionArrowRight.src = './images/icons/l-arrow-right-day.svg';
      this.sectionArrowLeft.src = './images/icons/l-arrow-left-day.svg';
      this.learnCircle.forEach((instance) => {
        instance.src = './images/icons/icon-circle-day.svg';
      });
      this.learnArrow.forEach((instance) => {
        instance.src = './images/icons/icon-arrow-day.svg';
      });
      this.spinningBoxImages.forEach((instance) => (instance.src = './images/icons/logo-squared-day.svg'));
    }
    if (this.theme === 'day') {
      this.theme = 'night';
    } else this.theme = 'day';
  }
}

export default new ThemeSwitcher();
