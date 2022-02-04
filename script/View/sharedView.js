import ThemeSwitcher from "./nightView.js";

class SharedView {
  header = document.querySelector(".header-menu");
  menuBtn = document.querySelector(".side-menu__btn");
  themeBtn = document.querySelector(".theme-container__btn");
  sideMenu = document.querySelector(".side-menu");
  overlay = document.querySelector(".overlay");

  constructor() {
    this.overlay.addEventListener("click", this._toggleSideMenu.bind(this));
    this.menuBtn.addEventListener("click", this._toggleSideMenu.bind(this));
    this.themeBtn.addEventListener("click", this._changeTheme.bind(this));
  }

  _toggleSideMenu() {
    this.sideMenu.classList.toggle("side-menu__out");
    if (this.overlay.style.display === "block") {
      this.overlay.style.opacity = 0;
      setTimeout(
        function () {
          this.overlay.style.display = "none";
        }.bind(this),
        400
      );
    } else {
      this.overlay.style.display = "block";
      this.overlay.style.opacity = 1;
    }
  }

  _changeTheme() {
    document
      .querySelectorAll(".icon__theme")
      .forEach((btn) => btn.classList.toggle("icon__theme--active"));
    ThemeSwitcher.switchTheme();
  }
}

export default new SharedView();
