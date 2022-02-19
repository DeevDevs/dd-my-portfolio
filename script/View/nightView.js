class ThemeSwitcher {
  theme = 'light';

  switchThemeIdentifier() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else this.theme = 'light';
  }

  switchIconsShared() {
    this.switchThemeIdentifier();
    const logo = document.querySelector('.logo');
    if (this.theme === 'dark') logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-night"></use>`;
    if (this.theme === 'light') logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-day"></use>`;
  }

  switchIconsMain() {
    const aboutMeIcon = document.querySelector('.about-me__icon');
    const learningIcon = document.querySelector('.learning__icon');
    const projectsIcon = document.querySelector('.projects__icon');
    const experienceIcon = document.querySelector('.experience__icon');
    const learnArrow = document.querySelectorAll('.sec__btn--arrow');
    const learnCircle = document.querySelectorAll('.sec__btn--circle');
    const sectionArrowLeft = document.querySelector('.l-arrow-left');
    const sectionArrowRight = document.querySelector('.l-arrow-right');
    const spinningBoxImages = document.querySelectorAll('.spinning__svg');
    if (this.theme === 'dark') {
      sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-night"></use>`;
      sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-night"></use>`;
      aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-night"></use>`;
      learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-night"></use>`;
      projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-night"></use>`;
      experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-night"></use>`;
      learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-night"></use>`;
      });
      learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-night"></use>`;
      });
      spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-night"></use>`)
      );
    }
    if (this.theme === 'light') {
      sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-day"></use>`;
      sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-day"></use>`;
      aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-day"></use>`;
      learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-day"></use>`;
      projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-day"></use>`;
      experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-day"></use>`;
      learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-day"></use>`;
      });
      learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-day"></use>`;
      });
      spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-day"></use>`)
      );
    }
  }

  switchIconsQualifications() {
    const introIcon = document.querySelector('.intro-part__icon');
    const xBtns = document.querySelectorAll('.x-btn-svg');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-night"></use>`;
      xBtns.forEach((btn) => (btn.innerHTML = `<use href="./images/icons/all-icons.svg#x-button-light"></use>`));
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-day"></use>`;
      xBtns.forEach((btn) => (btn.innerHTML = `<use href="./images/icons/all-icons.svg#x-button-dark"></use>`));
    }
  }

  // switchTheme() {
  //   document.body.classList.toggle('bg-main');
  //   document.body.classList.toggle('text-main');
  //   this.header.classList.toggle('bg-main');
  //   this.sideMenu.classList.toggle('bg-secondary');
  //   this.welcomeSection.classList.toggle('welcome-night');
  //   this.sectionsAdvert.forEach((section) => {
  //     section.classList.toggle('bg-background');
  //   });
  //   this.advertImages.forEach((image) => {
  //     image.classList.toggle('shadow-night');
  //   });
  //   this.boxSides.forEach((side) => {
  //     side.classList.toggle('shadow-night');
  //     side.classList.toggle('bg-secondary');
  //   });
  //   this.sectionAbout.classList.toggle('about-me-dark');
  //   this.sectionLearning.classList.toggle('learning-dark');
  //   this.sectionProjects.classList.toggle('projects-dark');
  //   this.sectionExperience.classList.toggle('experience-dark');
  //   if (this.theme === 'day') {
  //     // this.logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-night"></use>`;
  //     // this.sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-night"></use>`;
  //     // this.sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-night"></use>`;
  //     // this.aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-night"></use>`;
  //     // this.learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-night"></use>`;
  //     // this.projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-night"></use>`;
  //     // this.experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-night"></use>`;
  //     // this.learnArrow.forEach((instance) => {
  //     //   instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-night"></use>`;
  //     // });
  //     // this.learnCircle.forEach((instance) => {
  //     //   instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-night"></use>`;
  //     // });
  //     // this.spinningBoxImages.forEach(
  //     //   (instance) =>
  //     //     (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-night"></use>`)
  //     // );
  //   }
  //   if (this.theme === 'night') {
  //     // this.logo.innerHTML = `<use href="./images/icons/all-icons.svg#logo-box-day"></use>`;
  //     // this.sectionArrowRight.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-right-day"></use>`;
  //     // this.sectionArrowLeft.innerHTML = `<use href="./images/icons/all-icons.svg#l-arrow-left-day"></use>`;
  //     // this.aboutMeIcon.innerHTML = `<use href="./images/icons/all-icons.svg#icon-me-day"></use>`;
  //     // this.learningIcon.innerHTML = `<use href="./images/icons/all-icons.svg#learning-icon-day"></use>`;
  //     // this.projectsIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-day"></use>`;
  //     // this.experienceIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-day"></use>`;
  //     // this.learnArrow.forEach((instance) => {
  //     //   instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-arrow-day"></use>`;
  //     // });
  //     // this.learnCircle.forEach((instance) => {
  //     //   instance.innerHTML = `<use href="./images/icons/all-icons.svg#icon-circle-day"></use>`;
  //     // });
  //     // this.spinningBoxImages.forEach(
  //     //   (instance) =>
  //     //     (instance.innerHTML = `<use class="spin-image" href="./images/icons/all-icons.svg#logo-box-day"></use>`)
  //     // );
  //   }
  //   // if (this.theme === 'day') {
  //   //   this.theme = 'night';
  //   // } else this.theme = 'day';
  // }
}

export default new ThemeSwitcher();
