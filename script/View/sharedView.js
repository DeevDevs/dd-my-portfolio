import ThemeSwitcher from './nightView.js';

class SharedView {
  header = document.querySelector('.header-menu');
  menuBtn = document.querySelector('.side-menu__btn');
  themeBtn = document.querySelector('.theme-container__btn');
  sideMenu = document.querySelector('.side-menu');
  overlay = document.querySelector('.overlay');
  topMenuLogo = document.querySelector('.logo-container');
  switched = true;

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

  // _changeTheme() {
  //   document.querySelectorAll('.icon__theme').forEach((btn) => btn.classList.toggle('icon__theme--active'));
  //   ThemeSwitcher.switchTheme();
  // }
}

export default new SharedView();
