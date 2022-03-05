class ExperienceView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text');
  introIcon = document.querySelector('.intro-part__icon');

  constructor() {
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
  }

  ////////////////////// MOVING SHADOW CODE ////////////////////////

  addIntroMovingShadow(e) {
    const shadowParameters = this.movingShadow(e, this.introBox, 15);
    this.introText.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 4px var(--icons-shadow))`;
    this.introIcon.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 8px var(--icons-shadow))`;
  }

  movingShadow(e, element = e.target, maxShadow) {
    const totalHeight = element.clientHeight;
    const totalWidth = element.clientWidth;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    return [
      Math.trunc(((totalWidth / 2 - mouseX) * maxShadow) / (totalWidth / 2)),
      Math.trunc(((totalHeight / 2 - mouseY) * maxShadow) / (totalHeight / 2)),
    ];
  }
}

export default new ExperienceView();
