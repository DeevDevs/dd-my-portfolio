import ThemeSwitcher from './nightView.js';

class SharedView {
  header = document.querySelector('.header-menu');
  menuBtn = document.querySelector('.side-menu__btn');
  themeBtn = document.querySelector('.theme-container__btn');
  sideMenu = document.querySelector('.side-menu');
  overlay = document.querySelector('.overlay');
  topMenuLogo = document.querySelector('.logo-container');
  switched = true;
  footerMenu = document.querySelector('.footer-menu');
  footerBtns = document.querySelector('.footer-menu__buttons');
  footerExtraDiv = document.querySelector('.footer-menu__extra');
  footerSubmitBtn = document.querySelector('.footer-menu__form-submit');
  footerWindow = 'contacts';

  //running code-related variables
  runningCodeDiv = document.querySelector('.intro-part__running-code-box');
  fallingDiv = document.querySelector('.falling-down-div');
  runningDiv = document.querySelector('.running-right-div');
  fallingDivTranslateValue = 2.25;

  footerMenuObserver = new IntersectionObserver(this.hideExtraFooterBox.bind(this), { root: null, threshold: 0 });

  constructor() {
    this.overlay.addEventListener('click', this._toggleSideMenu.bind(this));
    this.menuBtn.addEventListener('click', this._toggleSideMenu.bind(this));
    this.themeBtn.addEventListener(
      'click',
      function () {
        this._changeTheme();
        this._changeIcons();
      }.bind(this)
    );
    this.footerBtns.addEventListener('click', this.displayExtraFooterBox.bind(this));
    this.footerMenuObserver.observe(this.footerMenu);
    this.footerSubmitBtn.addEventListener('click', this.submitFooterMessage.bind(this));
    //empty form fields
    document.querySelectorAll('.footer__input-field').forEach((field) => (field.value = ''));

    this.makeDivFall();
  }

  // running code-related functions
  makeDivFall() {
    if (window.location.href.endsWith('indivproject')) return;
    this.fallingDiv.style.transform = `translateY(${this.fallingDivTranslateValue}vh)`;
    this.fallingDivTranslateValue < 90
      ? (this.fallingDivTranslateValue += 2.25)
      : (this.fallingDivTranslateValue = 2.25);

    if (this.fallingDivTranslateValue > 2.25) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
      this.runningCodeDiv.style.backgroundImage = `none`;
    }
    if (this.fallingDivTranslateValue > 9.75) {
      this.runningCodeDiv.style.transform = `translateY(18vh) scale(1.2)`;
    }
    if (this.fallingDivTranslateValue > 14.5) {
      this.runningCodeDiv.style.transform = `translateY(9vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 20.75) {
      this.runningCodeDiv.style.transform = `translateY(5vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 23) {
      this.runningCodeDiv.style.transform = `translateY(3vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 26.75) {
      this.runningCodeDiv.style.transform = `translateY(-12vh) scale(1.3)`;
    }
    if (this.fallingDivTranslateValue > 46.75) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
    }
    if (this.fallingDivTranslateValue > 50) {
      this.runningCodeDiv.style.transform = `translateY(-2vh) scale(1)`;
    }
    if (this.fallingDivTranslateValue > 66.75) {
      this.runningCodeDiv.style.transform = `translateY(-25vh) scale(1.2)`;
      this.runningCodeDiv.style.backgroundImage = `linear-gradient(to top, var(--main-bg), transparent)`;
    }
    if (this.fallingDivTranslateValue > 85.75) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
    }
    setTimeout(
      function () {
        this.runningDiv.style.transform = `translateX(100%)`;
      }.bind(this),
      50
    );
    setTimeout(() => {
      this.runningDiv.style.transition = `transform 0s, background-color 0.5s ease`;
      this.runningDiv.style.transform = `translateX(0%)`;
      this.runningDiv.style.top = `${this.fallingDivTranslateValue - 2.25}vh`;
      setTimeout(
        function () {
          this.runningDiv.style.transition = `transform 6s linear, background-color 0.5s ease`;
        }.bind(this),
        50
      );
      this.makeDivFall();
    }, 6200);
  }

  displayExtraFooterBox(e) {
    this.footerMenu.classList.add('footer-menu__expand');
    this.footerExtraDiv.classList.remove('footer-menu__extra__hidden');
    if (e.target.closest('.footer-contacts-btn')) {
      if (this.footerWindow !== 'contacts') {
        if (window.innerWidth < 1080) {
          this.footerExtraDiv.style.transform = `rotateY(0deg)`;
          this.footerWindow = 'contacts';
        }
      }
    }
    if (e.target.closest('.footer-address-btn')) {
      if (this.footerWindow !== 'address') {
        if (window.innerWidth < 1080) {
          this.footerExtraDiv.style.transform = `rotateY(180deg)`;
          this.footerWindow = 'address';
          console.log('switched');
        }
      }
    }
    console.log('scrolling');
    setTimeout(() => document.body.scrollIntoView({ block: 'end', behavior: 'smooth' }), 100);
  }

  hideExtraFooterBox() {
    this.footerMenu.classList.remove('footer-menu__expand');
    this.footerExtraDiv.classList.add('footer-menu__extra__hidden');
  }

  submitFooterMessage(e) {
    e.preventDefault();
    const messageArr = new FormData(document.querySelector('.footer-menu__form'));
    const messageObject = Object.fromEntries(messageArr);
    console.log(messageObject);
    document.querySelectorAll('.footer__input-field').forEach((field) => (field.value = ''));
  }

  _changeTheme() {
    document.querySelectorAll('.icon__theme').forEach((btn) => btn.classList.toggle('icon__theme--active'));
    if (this.switched === true) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.switched = false;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.switched = true;
    }
  }

  _changeIcons() {
    ThemeSwitcher.switchIconsShared();
    if (window.location.href.endsWith('main-page')) ThemeSwitcher.switchIconsMain();
    if (window.location.href.endsWith('about-me')) ThemeSwitcher.switchIconsAboutMe();
    if (window.location.href.endsWith('qualifications')) ThemeSwitcher.switchIconsQualifications();
    if (window.location.href.endsWith('projects')) ThemeSwitcher.switchIconsProjects();
    if (window.location.href.endsWith('experience')) ThemeSwitcher.switchIconsExperience();
    if (window.location.href.endsWith('indivproject')) ThemeSwitcher.switchIconsIndiv();
  }

  _toggleSideMenu() {
    if (this.overlay.style.display === 'block' && !this.sideMenu.classList.contains('side-menu__out')) return;
    this.sideMenu.classList.toggle('side-menu__out');
    if (this.overlay.style.display === 'block') {
      this.overlay.style.opacity = 0;
      setTimeout(
        function () {
          this.overlay.style.display = 'none';
        }.bind(this),
        400
      );
    } else {
      this.overlay.style.display = 'block';
      this.overlay.style.opacity = 1;
    }
  }
}

export default new SharedView();
