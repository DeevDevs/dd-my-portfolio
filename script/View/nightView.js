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

  switchIconsProjects() {
    const introIcon = document.querySelector('.intro-part__icon');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-night"></use>`;
      // xBtns.forEach((btn) => (btn.innerHTML = `<use href="./images/icons/all-icons.svg#x-button-light"></use>`));
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#projects-icon-day"></use>`;
      // xBtns.forEach((btn) => (btn.innerHTML = `<use href="./images/icons/all-icons.svg#x-button-dark"></use>`));
    }
  }

  switchIconsExperience() {
    const introIcon = document.querySelector('.intro-part__icon');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-night"></use>`;
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="./images/icons/all-icons.svg#experience-icon-day"></use>`;
    }
  }
}

export default new ThemeSwitcher();
