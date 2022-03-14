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
  }

  displayExtraFooterBox(e) {
    this.footerMenu.classList.add('footer-menu__expand');
    this.footerExtraDiv.classList.remove('footer-menu__extra__hidden');
    if (e.target.closest('.footer-contacts-btn')) {
      if (this.footerWindow !== 'contacts') {
        if (window.innerWidth > 1080) return;
        this.footerExtraDiv.style.transform = `rotateY(0deg)`;
        this.footerWindow = 'contacts';
      }
    }
    if (e.target.closest('.footer-address-btn')) {
      if (this.footerWindow !== 'address') {
        if (window.innerWidth > 1080) return;
        this.footerExtraDiv.style.transform = `rotateY(180deg)`;
        this.footerWindow = 'address';
      }
    }
    setTimeout(() => document.body.scrollIntoView({ block: 'end', behavior: 'smooth' }), 50);
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
    if (window.location.href.endsWith('index.html')) ThemeSwitcher.switchIconsMain();
    if (window.location.href.endsWith('qualifications.html')) ThemeSwitcher.switchIconsQualifications();
    if (window.location.href.endsWith('projects.html')) ThemeSwitcher.switchIconsProjects();
    if (window.location.href.endsWith('experience.html')) ThemeSwitcher.switchIconsExperience();
    if (window.location.href.endsWith('indivproject.html')) ThemeSwitcher.switchIconsIndiv();
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
