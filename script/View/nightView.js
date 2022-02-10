class ThemeSwitcher {
  header = document.querySelector('.header-menu');
  logo = document.querySelector('.logo');
  sideMenu = document.querySelector('.side-menu');
  footer = document.querySelector('.footer-menu');
  sectionsAdvert = document.querySelectorAll('.advert__section');
  advertImages = document.querySelectorAll('.advert__section--image');
  sectionsMain = document.querySelectorAll('.sec__main');

  sectionAbout = document.getElementById('about-me');
  sectionLearning = document.getElementById('learning');
  sectionProjects = document.getElementById('projects');
  sectionExperience = document.getElementById('experience');

  aboutMeIcon = document.querySelector('.about-me__icon');
  learningIcon = document.querySelector('.learning__icon');
  projectsIcon = document.querySelector('.projects__icon');
  experienceIcon = document.querySelector('.experience__icon');

  learnArrow = document.querySelectorAll('.sec__btn--arrow');
  learnCircle = document.querySelectorAll('.sec__btn--circle');
  sectionArrowLeft = document.querySelector('.l-arrow-left');
  sectionArrowRight = document.querySelector('.l-arrow-right');
  welcomeSection = document.querySelector('.welcome-section');
  spinningBoxImages = document.querySelectorAll('.spinning__svg');
  boxSides = document.querySelectorAll('.box-side');
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
    this.boxSides.forEach((side) => {
      side.classList.toggle('shadow-night');
      side.classList.toggle('bg-secondary');
    });
    this.sectionAbout.classList.toggle('about-me-dark');
    this.sectionLearning.classList.toggle('learning-dark');
    this.sectionProjects.classList.toggle('projects-dark');
    this.sectionExperience.classList.toggle('experience-dark');
    if (this.theme === 'day') {
      this.logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-night"></use>`;
      this.sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-night"></use>`;
      this.sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-night"></use>`;
      this.aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-night"></use>`;
      this.learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-night"></use>`;
      this.projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-night"></use>`;
      this.experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-night"></use>`;
      this.learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-night"></use>`;
      });
      this.learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-night"></use>`;
      });
      this.spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-night"></use>`)
      );
    }
    if (this.theme === 'night') {
      this.logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-day"></use>`;
      this.sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-day"></use>`;
      this.sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-day"></use>`;
      this.aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-day"></use>`;
      this.learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-day"></use>`;
      this.projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-day"></use>`;
      this.experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-day"></use>`;
      this.learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-day"></use>`;
      });
      this.learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-day"></use>`;
      });
      this.spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-day"></use>`)
      );
    }
    if (this.theme === 'day') {
      this.theme = 'night';
    } else this.theme = 'day';
  }
}

export default new ThemeSwitcher();
