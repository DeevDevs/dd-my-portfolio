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
    const sideMenuIconhome = document.querySelector('.side-menu-icon__home');
    const sideMenuIconAboutme = document.querySelector('.side-menu-icon__aboutme');
    const sideMenuIconLearning = document.querySelector('.side-menu-icon__learning');
    const sideMenuIconProjects = document.querySelector('.side-menu-icon__projects');
    const sideMenuIconExperience = document.querySelector('.side-menu-icon__experience');
    const runningCodeImage = document.querySelector('.intro-part__animated-code');
    if (this.theme === 'dark') {
      logo.innerHTML = `<use href="/images/icons/all-icons.svg#logo-box-night"></use>`;
      sideMenuIconhome.innerHTML = `<use href="/images/icons/all-icons.svg#home-menu-icon-light"></use>`;
      sideMenuIconAboutme.innerHTML = `<use href="/images/icons/all-icons.svg#icon-me-night"></use>`;
      sideMenuIconLearning.innerHTML = `<use href="/images/icons/all-icons.svg#learning-icon-night"></use>`;
      sideMenuIconProjects.innerHTML = `<use href="/images/icons/all-icons.svg#projects-icon-night"></use>`;
      sideMenuIconExperience.innerHTML = `<use href="/images/icons/all-icons.svg#experience-icon-night"></use>`;
      if (runningCodeImage) runningCodeImage.src = '/images/js-code-white.png';
    }
    if (this.theme === 'light') {
      logo.innerHTML = `<use href="/images/icons/all-icons.svg#logo-box-day"></use>`;
      sideMenuIconhome.innerHTML = `<use href="/images/icons/all-icons.svg#home-menu-icon-dark"></use>`;
      sideMenuIconAboutme.innerHTML = `<use href="/images/icons/all-icons.svg#aboutme-menu-icon-dark"></use>`;
      sideMenuIconLearning.innerHTML = `<use href="/images/icons/all-icons.svg#learning-menu-icon-dark"></use>`;
      sideMenuIconProjects.innerHTML = `<use href="/images/icons/all-icons.svg#projects-menu-icon-dark"></use>`;
      sideMenuIconExperience.innerHTML = `<use href="/images/icons/all-icons.svg#experience-menu-icon-dark"></use>`;
      if (runningCodeImage) runningCodeImage.src = '/images/js-code-darkblue.png';
    }
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
      sectionArrowRight.innerHTML = `<use href="/images/icons/all-icons.svg#l-arrow-right-night"></use>`;
      sectionArrowLeft.innerHTML = `<use href="/images/icons/all-icons.svg#l-arrow-left-night"></use>`;
      aboutMeIcon.innerHTML = `<use href="/images/icons/all-icons.svg#icon-me-night"></use>`;
      learningIcon.innerHTML = `<use href="/images/icons/all-icons.svg#learning-icon-night"></use>`;
      projectsIcon.innerHTML = `<use href="/images/icons/all-icons.svg#projects-icon-night"></use>`;
      experienceIcon.innerHTML = `<use href="/images/icons/all-icons.svg#experience-icon-night"></use>`;
      learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="/images/icons/all-icons.svg#icon-arrow-night"></use>`;
      });
      learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="/images/icons/all-icons.svg#icon-circle-night"></use>`;
      });
      spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="/images/icons/all-icons.svg#logo-box-night"></use>`)
      );
    }
    if (this.theme === 'light') {
      sectionArrowRight.innerHTML = `<use href="/images/icons/all-icons.svg#l-arrow-right-day"></use>`;
      sectionArrowLeft.innerHTML = `<use href="/images/icons/all-icons.svg#l-arrow-left-day"></use>`;
      aboutMeIcon.innerHTML = `<use href="/images/icons/all-icons.svg#icon-me-day"></use>`;
      learningIcon.innerHTML = `<use href="/images/icons/all-icons.svg#learning-icon-day"></use>`;
      projectsIcon.innerHTML = `<use href="/images/icons/all-icons.svg#projects-icon-day"></use>`;
      experienceIcon.innerHTML = `<use href="/images/icons/all-icons.svg#experience-icon-day"></use>`;
      learnArrow.forEach((instance) => {
        instance.innerHTML = `<use href="/images/icons/all-icons.svg#icon-arrow-day"></use>`;
      });
      learnCircle.forEach((instance) => {
        instance.innerHTML = `<use href="/images/icons/all-icons.svg#icon-circle-day"></use>`;
      });
      spinningBoxImages.forEach(
        (instance) =>
          (instance.innerHTML = `<use class="spin-image" href="/images/icons/all-icons.svg#logo-box-day"></use>`)
      );
    }
  }

  switchIconsAboutMe() {
    const arrowDownSvgs = document.querySelectorAll('.amp-btn-down__icon');
    if (this.theme === 'light')
      arrowDownSvgs.forEach(
        (svgContainer) => (svgContainer.innerHTML = `<use href="/images/icons/all-icons.svg#arrow-down-dark"></use>`)
      );
    if (this.theme === 'dark')
      arrowDownSvgs.forEach(
        (svgContainer) => (svgContainer.innerHTML = `<use href="/images/icons/all-icons.svg#arrow-down-light"></use>`)
      );
  }

  switchIconsQualifications() {
    const introIcon = document.querySelector('.intro-part__icon');
    const xBtns = document.querySelectorAll('.x-btn-svg');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#learning-icon-night"></use>`;
      xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-light"></use>`));
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#learning-icon-day"></use>`;
      xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-dark"></use>`));
    }
  }

  switchIconsProjects() {
    const introIcon = document.querySelector('.intro-part__icon');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#projects-icon-night"></use>`;
      // xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-light"></use>`));
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#projects-icon-day"></use>`;
      // xBtns.forEach((btn) => (btn.innerHTML = `<use href="/images/icons/all-icons.svg#x-button-dark"></use>`));
    }
  }

  switchIconsExperience() {
    const introIcon = document.querySelector('.intro-part__icon');
    if (this.theme === 'dark') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#experience-icon-night"></use>`;
    }
    if (this.theme === 'light') {
      introIcon.innerHTML = `<use href="/images/icons/all-icons.svg#experience-icon-day"></use>`;
    }
  }

  switchIconsIndiv() {
    const scrollBackIcon = document.querySelector('.scroll-back__svg-btn');
    const scrollBackDot = document.querySelector('.scroll-back__svg-btn-dot');
    if (this.theme === 'dark') {
      scrollBackIcon.innerHTML = `<use href="/images/icons/all-icons.svg#scroll-back-icon-light"></use>`;
      scrollBackDot.innerHTML = `<use href="/images/icons/all-icons.svg#scroll-back-spinning-dot-light"></use>`;
    }
    if (this.theme === 'light') {
      scrollBackIcon.innerHTML = `<use href="/images/icons/all-icons.svg#scroll-back-icon-dark"></use>`;
      scrollBackDot.innerHTML = `<use href="/images/icons/all-icons.svg#scroll-back-spinning-dot-dark"></use>`;
    }
  }
}

export default new ThemeSwitcher();
