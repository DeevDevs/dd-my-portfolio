class IndividualView {
  headerBox = document.querySelector('.header-menu');
  footerBox = document.querySelector('.footer-menu');
  indivScrolledSection = document.querySelector('.indiv-section__scrolled-div');
  indivMainSection = document.querySelector('.indiv-section__main');
  indivContentSection = document.querySelector('.indiv-section__content');
  allIndivSections = document.querySelectorAll('.indiv-section-box');
  allIndivTextBoxes = document.querySelectorAll('.indiv-headline-text-box');
  allParagraphBoxes = document.querySelectorAll('.indiv-par-box');

  maxWidthPossible;
  mode = 'desktop';

  //section 1
  scrollEvent;
  boxOne = document.querySelector('.indiv-box-one');
  headlineImage = document.querySelector('.indiv-img__one');
  headlineBox = document.querySelector('.indiv-headline-box-one');
  headlineImageWideScroll = 30;

  //section 2
  scrollEventTwo;
  boxTwo = document.querySelector('.indiv-box-two');
  sectionTwoImageLeft = document.querySelector('.indiv-img__two-left');
  sectionTwoImageRight = document.querySelector('.indiv-img__two-right');
  headlineBoxTwo = document.querySelector('.indiv-headline-box-two');
  paragraphBoxTwo = document.querySelector('.indiv-par-box-two');
  paragraphTwo = document.querySelector('.indiv-par-two');
  sectionTwoWideScroll = 10;

  //section 3
  scrollEventThree;
  sectionThreeImage = document.querySelector('.indiv-img__three');
  sectionThreeScroll = 0;

  //section 4
  scrollEventFour;
  sectionFourImage = document.querySelector('.indiv-img__four');
  // sectionFourNarrowScroll = -4;
  sectionFourWideScroll = -3;

  indivSectionsObserver = new IntersectionObserver(this.runScrollAnimation.bind(this), { root: null, threshold: 0.05 });
  constructor() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener(
      'load',
      function () {
        //counting the width of the screen to adjust height of the scrolled div
        this.indivScrolledSection.style.height = window.innerWidth * 4 - (window.innerWidth - window.innerHeight);
        this.maxWidthPossible = window.innerWidth * 4 - (window.innerWidth - window.innerHeight) - window.innerWidth;
        //add desktop classes, if the user has desktop
        if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 1080) this.toggleSmartphoneMode();
      }.bind(this)
    );

    // //counting the width of the screen to adjust height of the scrolled div
    // this.indivScrolledSection.style.height = window.innerWidth * 4 - (window.innerWidth - window.innerHeight);
    // this.maxWidthPossible = window.innerWidth * 4 - (window.innerWidth - window.innerHeight) - window.innerWidth;

    window.addEventListener(
      'resize',
      function () {
        console.log('resized');
        //counting the width of the screen to adjust height of the scrolled div
        this.maxWidthPossible = window.innerWidth * 4 - (window.innerWidth - window.innerHeight) - window.innerWidth;
        this.indivScrolledSection.style.height = window.innerWidth * 4 - (window.innerWidth - window.innerHeight);
        if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 1080 && this.mode === 'smartphone') {
          this.toggleSmartphoneMode();
          this.mode = 'desktop';
        } else if (
          window.matchMedia('(hover: hover)').matches &&
          window.innerWidth <= 1080 &&
          this.mode === 'desktop'
        ) {
          this.toggleSmartphoneMode();
          this.mode = 'smartphone';
        }
      }.bind(this)
    );

    this.allIndivSections.forEach((section) => {
      this.indivSectionsObserver.observe(section);
    });
  }

  toggleSmartphoneMode() {
    window.scrollTo(0, 0);
    // this.indivMainSection.classList.toggle('indiv-section__main__desktop');
    // this.indivContentSection.classList.toggle('indiv-section__content__desktop');
    // this.allIndivSections.forEach((section) => section.classList.toggle('indiv-section-box__desktop'));
    // this.allIndivTextBoxes.forEach((box) => box.classList.toggle('indiv-headline-text-box__desktop'));
    // this.allParagraphBoxes.forEach((paragraph) => paragraph.classList.toggle('indiv-par-box__desktop'));
    // this.indivScrolledSection.classList.toggle('indiv-section__scrolled-div__desktop');
    // // section 1
    // this.boxOne.classList.toggle('indiv-box-one__desktop');
    // this.headlineImage.classList.toggle('indiv-img__one__desktop');
    // this.headlineBox.classList.toggle('indiv-headline-box-one__desktop');
    // //section 2
    // this.boxTwo.classList.toggle('indiv-box-two__desktop');
    // this.sectionTwoImageLeft.classList.toggle('indiv-img__two-left__desktop');
    // this.sectionTwoImageRight.classList.toggle('indiv-img__two-right__desktop');
    // this.headlineBoxTwo.classList.toggle('indiv-headline-box-two__desktop');
    // this.paragraphBoxTwo.classList.toggle('indiv-par-box-two__desktop');
    // // this.paragraphTwo.classList.toggle('');

    //Real Features to Switch
    this.headerBox.classList.remove('header-scroll-started');
    this.footerBox.classList.remove('footer-scroll-started');
    this.indivMainSection.classList.remove('main-scroll-started');
    if (window.innerWidth <= 1080) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(0)`;
      this.headlineImage.style.transform = `translateX(0)`;
      this.sectionTwoImageRight.style.transform = `translateY(0)`;
      this.sectionTwoImageLeft.style.transform = `translateY(0)`;
      this.sectionThreeImage.style.transform = `translateX(0)`;
      this.sectionFourImage.style.transform = `translateY(0)`;
    }
    if (window.innerWidth >= 1080) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(0)`;
      this.headlineImage.style.transform = `translateX(30rem)`;
      this.sectionTwoImageRight.style.transform = `translateY(10rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(10rem)`;
      this.sectionThreeImage.style.transform = `translateX(0)`;
      this.sectionFourImage.style.transform = `translateY(-3rem)`;
    }
  }

  runScrollAnimation(entry, observer) {
    if (!window.matchMedia('(hover: hover)').matches) {
      console.log(entry[0].target.id);
      observer.unobserve(entry[0].target);
      return;
    }
    if (entry[0].target.id === '1-indiv') {
      window.addEventListener('scroll', this.wideActivateIndivOne.bind(this));
    }
    if (entry[0].target.id === '2-indiv') {
      window.addEventListener('scroll', this.wideActivateIndivTwo.bind(this));
    }
    if (entry[0].target.id === '3-indiv') {
      window.addEventListener('scroll', this.wideActivateIndivThree.bind(this));
    }
    if (entry[0].target.id === '4-indiv') {
      window.addEventListener('scroll', this.wideActivateIndivFour.bind(this));
    }
    console.log(entry[0].target.id);
    observer.unobserve(entry[0].target);
  }

  // narrActivateIndivOne() {
  //   if (this.scrollEvent > this.maxWidthPossible) return;
  //   if (this.scrollEvent < window.pageYOffset) {
  //     //headline image one
  //     this.headlineImageNarrowScroll = this.headlineImageNarrowScroll - (window.pageYOffset - this.scrollEvent) / 45;
  //     this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
  //   }
  //   if (this.scrollEvent > window.pageYOffset) {
  //     //headline image one
  //     this.headlineImageNarrowScroll = this.headlineImageNarrowScroll + (this.scrollEvent - window.pageYOffset) / 45;
  //     this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
  //   }
  //   this.scrollEvent = window.pageYOffset;
  // }

  wideActivateIndivOne() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEvent < window.pageYOffset) {
      if (!this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.style.transition = 'transform 0.3s linear, opacity 0.3s linear';
        this.footerBox.style.transition = 'transform 0.3s linear';
        this.headerBox.classList.add('header-scroll-started');
        this.footerBox.classList.add('footer-scroll-started');
        this.indivMainSection.classList.add('main-scroll-started');
      }
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px)`;
      //headline image one
      this.headlineImageWideScroll = this.headlineImageWideScroll - (window.pageYOffset - this.scrollEvent) / 40;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }
    if (this.scrollEvent > window.pageYOffset) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px`;
      if (this.scrollEvent < 10 && this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.classList.remove('header-scroll-started');
        this.footerBox.classList.remove('footer-scroll-started');
        this.indivMainSection.classList.remove('main-scroll-started');
      }

      //headline image one
      this.headlineImageWideScroll = this.headlineImageWideScroll + (this.scrollEvent - window.pageYOffset) / 40;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }

    //renew scrollEvent
    this.scrollEvent = window.pageYOffset;
  }

  // narrActivateIndivTwo() {
  //   // console.log(window.pageYOffset - this.scrollEventTwo);
  //   if (this.scrollEventTwo < window.pageYOffset) {
  //     //headline image one
  //     this.sectionTwoNarrowScroll = this.sectionTwoNarrowScroll - (window.pageYOffset - this.scrollEventTwo) / 105;
  //     this.sectionTwoImageLeft.style.transform = `translateX(${
  //       this.sectionTwoNarrowScroll > 0
  //         ? -this.sectionTwoNarrowScroll.toFixed(3)
  //         : Math.abs(this.sectionTwoNarrowScroll.toFixed(3))
  //     }rem)`;
  //     this.sectionTwoImageRight.style.transform = `translateX(${this.sectionTwoNarrowScroll.toFixed(3)}rem)`;
  //   }
  //   if (this.scrollEventTwo > window.pageYOffset) {
  //     //headline image one
  //     this.sectionTwoNarrowScroll = this.sectionTwoNarrowScroll + (this.scrollEventTwo - window.pageYOffset) / 105;
  //     this.sectionTwoImageLeft.style.transform = `translateX(${
  //       this.sectionTwoNarrowScroll > 0
  //         ? -this.sectionTwoNarrowScroll.toFixed(3)
  //         : Math.abs(this.sectionTwoNarrowScroll.toFixed(3))
  //     }rem)`;
  //     this.sectionTwoImageRight.style.transform = `translateX(${this.sectionTwoNarrowScroll.toFixed(3)}rem)`;
  //   }

  //   // console.log(this.sectionTwoNarrowScroll, (window.pageYOffset - this.scrollEventTwo) / 20);
  //   //renew scrollEvent
  //   this.scrollEventTwo = window.pageYOffset;
  // }

  wideActivateIndivTwo() {
    if (window.innerWidth <= 1080) return;
    // console.log(window.pageYOffset - this.scrollEventTwo);
    if (this.scrollEventTwo < window.pageYOffset) {
      //headline image one
      this.sectionTwoWideScroll = this.sectionTwoWideScroll - (window.pageYOffset - this.scrollEventTwo) / 90;
      this.sectionTwoImageRight.style.transform = `translateY(${
        this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll)
      }rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(${this.sectionTwoWideScroll}rem)`;
    }
    if (this.scrollEventTwo > window.pageYOffset) {
      //headline image one
      this.sectionTwoWideScroll = this.sectionTwoWideScroll + (this.scrollEventTwo - window.pageYOffset) / 90;
      this.sectionTwoImageRight.style.transform = `translateY(${
        this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll)
      }rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(${this.sectionTwoWideScroll}rem)`;
    }

    // console.log(this.sectionTwoWideScroll, (window.pageYOffset - this.scrollEventTwo) / 30);
    //renew scrollEvent
    this.scrollEventTwo = window.pageYOffset;
  }

  // narrActivateIndivThree() {
  //   if (this.scrollEventThree < window.pageYOffset) {
  //     // console.log(this.sectionThreeNarrowScroll);
  //     //headline image one
  //     this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll + (window.pageYOffset - this.scrollEventThree) / 65;
  //     this.sectionThreeImage.style.transform = `translateX(${this.sectionThreeNarrowScroll}rem) translateY(-${this.sectionThreeNarrowScroll}rem) `;
  //   }
  //   if (this.scrollEventThree > window.pageYOffset) {
  //     //headline image one
  //     this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll - (this.scrollEventThree - window.pageYOffset) / 65;
  //     this.sectionThreeImage.style.transform = `translateX(${this.sectionThreeNarrowScroll}rem) translateY(-${this.sectionThreeNarrowScroll}rem)`;
  //   }
  //   this.scrollEventThree = window.pageYOffset;
  // }
  wideActivateIndivThree() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEventThree < window.pageYOffset) {
      //headline image one
      this.sectionThreeScroll = this.sectionThreeScroll + (window.pageYOffset - this.scrollEventThree) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeScroll}rem)`;
    }
    if (this.scrollEventThree > window.pageYOffset) {
      //headline image one
      this.sectionThreeScroll = this.sectionThreeScroll - (this.scrollEventThree - window.pageYOffset) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeScroll}rem)`;
    }
    this.scrollEventThree = window.pageYOffset;
  }

  // narrActivateIndivFour() {
  //   if (this.scrollEventFour < window.pageYOffset) {
  //     //headline image one
  //     this.sectionFourNarrowScroll = this.sectionFourNarrowScroll + (window.pageYOffset - this.scrollEventFour) / 60;
  //     this.sectionFourImage.style.transform = `translateY(${this.sectionFourNarrowScroll}rem)`;
  //   }
  //   if (this.scrollEventFour > window.pageYOffset) {
  //     //headline image one
  //     this.sectionFourNarrowScroll = this.sectionFourNarrowScroll - (this.scrollEventFour - window.pageYOffset) / 60;
  //     this.sectionFourImage.style.transform = `translateY(${this.sectionFourNarrowScroll}rem)`;
  //   }
  //   this.scrollEventFour = window.pageYOffset;
  // }

  wideActivateIndivFour() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEventFour < window.pageYOffset) {
      //headline image one
      this.sectionFourWideScroll = this.sectionFourWideScroll + (window.pageYOffset - this.scrollEventFour) / 400;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourWideScroll}rem)`;
    }
    if (this.scrollEventFour > window.pageYOffset) {
      //headline image one
      this.sectionFourWideScroll = this.sectionFourWideScroll - (this.scrollEventFour - window.pageYOffset) / 400;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourWideScroll}rem)`;
    }
    this.scrollEventFour = window.pageYOffset;
  }
}

export default new IndividualView();
