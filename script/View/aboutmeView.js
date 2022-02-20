class AboutMeView {
  allAmpSubs = document.querySelectorAll('.amp__sub');
  introText = document.querySelector('.intro-part__text');
  introImage = document.querySelector('.intro-part__photo');
  introBox = document.querySelector('.intro-part__glass');

  subObserver = new IntersectionObserver(this.rollInTheSub.bind(this), { root: null, threshold: 0.1 });
  constructor() {
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.allAmpSubs.forEach((sub) => this.subObserver.observe(sub));
  }

  rollInTheSub(entry, observer) {
    if (!entry[0].isIntersecting) return;
    console.log(entry[0]);
    entry[0].target.style.transform = 'translateX(0vw)';
    entry[0].target.style.opacity = '1';
  }

  ////////////////////// MOVING SHADOW CODE ////////////////////////

  addIntroMovingShadow(e) {
    const shadowParameters = this.movingShadow(e, this.introBox, 15);
    this.introText.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 4px var(--icons-shadow))`;
    this.introImage.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 8px var(--icons-shadow))`;
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

export default new AboutMeView();
