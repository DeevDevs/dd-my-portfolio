class AboutMeView {
  allAmpSubs = document.querySelectorAll('.amp__sub');
  allSplitters = document.querySelectorAll('.sub-splitter');
  introText = document.querySelector('.intro-part__text');
  introImage = document.querySelector('.intro-part__photo');
  introBox = document.querySelector('.intro-part__glass');
  mainSection = document.querySelector('.amp__main-part');
  ampBtnsRevealSection = document.querySelectorAll('.amp-btn__reveal-section');
  ampHeadlinesRevealSection = document.querySelectorAll('.amp-headline__reveal-section');
  allImages = document.querySelectorAll('.amp-img');
  sectionsHeight = [];

  // subObserver = new IntersectionObserver(this.rollInTheSub.bind(this), { root: null, threshold: 0.1 });
  ampSectionObserver = new IntersectionObserver(this.revealAmpSection.bind(this), { root: null, threshold: 0 });

  constructor() {
    this.ampBtnsRevealSection.forEach((btn) =>
      btn.addEventListener(
        'click',
        function () {
          this.revealInfoSection(btn.dataset.ampnum);
        }.bind(this)
      )
    );

    this.ampHeadlinesRevealSection.forEach((headline) =>
      headline.addEventListener(
        'click',
        function () {
          this.revealInfoSection(headline.dataset.ampnum);
        }.bind(this)
      )
    );

    this.allAmpSubs.forEach((sub) => this.countSectionHeight(sub));
    this.ampSectionObserver.observe(this.mainSection);
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    // this.allAmpSubs.forEach((sub) => this.subObserver.observe(sub));
  }

  ////////// OBSERVERS //////////////

  revealAmpSection(entry, observer) {
    if (!entry[0].isIntersecting) return;
    if (entry[0].isIntersecting) {
      this.mainSection.classList.remove('section-hidden');
      this.allImages.forEach((img) => (img.src = img.dataset.path));
    }
  }

  //////////// OPEN SECTION ANIMATION ////////////////

  countSectionHeight(sub) {
    const height = sub.offsetHeight;
    this.sectionsHeight.push(height);
    // console.log(this.sectionsHeight);
    sub.style.display = 'none';
  }

  revealInfoSection(id) {
    const secNum = parseInt(id);
    const chosenSection = this.allAmpSubs[secNum];
    //hiding the used btn
    this.hideUsedBtn(secNum);
    //adding transition and moving subs down
    this.allAmpSubs.forEach((sub) => (sub.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s linear'));
    this.allAmpSubs.forEach((sub, i) => {
      if (i < secNum) return;
      sub.style.transform = `translateY(${this.sectionsHeight[secNum]}px)`;
    });
    //adding transition and moving splitters down
    this.allSplitters.forEach((splitter) => (splitter.style.transition = 'transform 0.4s ease-in-out'));
    this.allSplitters.forEach((splitter, i) => {
      if (i < secNum) return;
      splitter.style.transform = `translateY(${this.sectionsHeight[secNum]}px)`;
    });
    setTimeout(() => {
      chosenSection.style.display = 'flex';
      this.allAmpSubs.forEach((sub, i) => {
        if (i < secNum) return;
        sub.style.transition = 'opacity 0.4s linear';
        sub.style.transform = `translateY(0px)`;
      });
      this.allSplitters.forEach((splitter, i) => {
        if (i < secNum) return;
        splitter.style.transition = 'transform 0s';
        splitter.style.transform = `translateY(0px)`;
      });
    }, 350);
    setTimeout(() => {
      chosenSection.classList.remove('amp-element-hidden');
    }, 400);
  }

  hideUsedBtn(num) {
    this.ampBtnsRevealSection[num].classList.add('amp-element-hidden');
    this.ampHeadlinesRevealSection[num].classList.add('amp-element-hidden');
    setTimeout(() => {
      this.ampBtnsRevealSection[num].style.display = 'none';
      this.ampHeadlinesRevealSection[num].style.display = 'none';
    }, 400);
  }

  // rollInTheSub(entry, observer) {
  //   if (!entry[0].isIntersecting) return;
  //   console.log(entry[0]);
  //   entry[0].target.style.transform = 'translateX(0vw)';
  //   entry[0].target.style.opacity = '1';
  // }

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

export default AboutMeView;
