class MainView {
  mainSections = document.querySelectorAll(".sec__main");
  viewportHeight = window.innerHeight;

  constructor() {
    window.addEventListener("scroll", this.checkSectionPosition.bind(this));
  }

  checkSectionPosition() {
    this.mainSections.forEach((section) => {
      const positionY = section.getBoundingClientRect().y;
      if (
        positionY > 0 - this.viewportHeight / 9 &&
        positionY < this.viewportHeight - this.viewportHeight / 9
      ) {
        section.querySelector(".sec__icon-container").classList.add("zoomed");
        section
          .querySelector(".sec__description--title")
          .classList.add("zoomed__text");
        section
          .querySelector(".sec__description--text")
          .classList.add("zoomed__text");
      } else if (
        positionY < 0 + this.viewportHeight / 9 ||
        positionY > this.viewportHeight - this.viewportHeight / 9
      ) {
        section
          .querySelector(".sec__icon-container")
          .classList.remove("zoomed");
        section
          .querySelector(".sec__description--title")
          .classList.remove("zoomed__text");
        section
          .querySelector(".sec__description--text")
          .classList.remove("zoomed__text");
      }
    });
  }
}

export default new MainView();
