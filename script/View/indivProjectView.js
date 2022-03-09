class IndividualView {
  headerBox = document.querySelector('.header-menu');
  footerBox = document.querySelector('.footer-menu');
  indivMainSection = document.querySelector('.indiv-section__main');
  indivContentSection = document.querySelector('.indiv-section__content');
  allIndivSections = document.querySelectorAll('.indiv-section-box');

  //section 1
  scrollEvent;
  headlineImage = document.querySelector('.indiv-img__one');
  headlineImageNarrowScroll = 0;
  headlineImageWideScroll = 18;
  //section 2
  scrollEventTwo;
  sectionTwoImageLeft = document.querySelector('.indiv-img__two-left');
  sectionTwoImageRight = document.querySelector('.indiv-img__two-right');
  sectionTwoNarrowScroll = 0;
  sectionTwoWideScroll = 10;
  //section 3
  scrollEventThree;
  sectionThreeImage = document.querySelector('.indiv-img__three');
  sectionThreeNarrowScroll = 0;
  // sectionThreeWideScroll = 10;
  //section 4
  scrollEventFour;
  sectionFourImage = document.querySelector('.indiv-img__four');
  sectionFourNarrowScroll = -4;
  // sectionFourWideScroll = 10;

  indivSectionsObserver = new IntersectionObserver(this.runScrollAnimation.bind(this), { root: null, threshold: 0.05 });
  constructor() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.allIndivSections.forEach((section) => {
      this.indivSectionsObserver.observe(section);
    });
  }

  runScrollAnimation(entry, observer) {
    if (entry[0].target.id === '1-indiv') {
      if (window.innerWidth < 1080) {
        window.addEventListener('scroll', this.narrActivateIndivOne.bind(this));
      }
      if (window.innerWidth > 1080) {
        window.addEventListener('scroll', this.wideActivateIndivOne.bind(this));
      }
    }
    if (entry[0].target.id === '2-indiv') {
      if (window.innerWidth < 1080) {
        window.addEventListener('scroll', this.narrActivateIndivTwo.bind(this));
      }
      if (window.innerWidth > 1080) {
        window.addEventListener('scroll', this.wideActivateIndivTwo.bind(this));
      }
    }
    if (entry[0].target.id === '3-indiv') {
      if (window.innerWidth < 1080) {
        window.addEventListener('scroll', this.narrActivateIndivThree.bind(this));
      }
      if (window.innerWidth > 1080) {
        window.addEventListener('scroll', this.wideActivateIndivThree.bind(this));
      }
    }
    if (entry[0].target.id === '4-indiv') {
      if (window.innerWidth < 1080) {
        window.addEventListener('scroll', this.narrActivateIndivFour.bind(this));
      }
      if (window.innerWidth > 1080) {
        window.addEventListener('scroll', this.wideActivateIndivFour.bind(this));
      }
    }
    console.log(entry[0].target.id);
    observer.unobserve(entry[0].target);
  }

  narrActivateIndivOne() {
    if (this.scrollEvent < window.pageYOffset) {
      //headline image one
      this.headlineImageNarrowScroll = this.headlineImageNarrowScroll - (window.pageYOffset - this.scrollEvent) / 45;
      this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
    }
    if (this.scrollEvent > window.pageYOffset) {
      //headline image one
      this.headlineImageNarrowScroll = this.headlineImageNarrowScroll + (this.scrollEvent - window.pageYOffset) / 45;
      this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
    }
    this.scrollEvent = window.pageYOffset;
  }

  wideActivateIndivOne() {
    if (this.scrollEvent < window.pageYOffset) {
      if (!this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.style.transition = 'transform 0.3s linear';
        this.footerBox.style.transition = 'transform 0.3s linear';
        this.headerBox.classList.add('header-scroll-started');
        this.footerBox.classList.add('footer-scroll-started');
        this.indivMainSection.classList.add('main-scroll-started');
      }
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px`;
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

  narrActivateIndivTwo() {
    // console.log(window.pageYOffset - this.scrollEventTwo);
    if (this.scrollEventTwo < window.pageYOffset) {
      //headline image one
      this.sectionTwoNarrowScroll = this.sectionTwoNarrowScroll - (window.pageYOffset - this.scrollEventTwo) / 105;
      this.sectionTwoImageLeft.style.transform = `translateX(${
        this.sectionTwoNarrowScroll > 0
          ? -this.sectionTwoNarrowScroll.toFixed(3)
          : Math.abs(this.sectionTwoNarrowScroll.toFixed(3))
      }rem)`;
      this.sectionTwoImageRight.style.transform = `translateX(${this.sectionTwoNarrowScroll.toFixed(3)}rem)`;
    }
    if (this.scrollEventTwo > window.pageYOffset) {
      //headline image one
      this.sectionTwoNarrowScroll = this.sectionTwoNarrowScroll + (this.scrollEventTwo - window.pageYOffset) / 105;
      this.sectionTwoImageLeft.style.transform = `translateX(${
        this.sectionTwoNarrowScroll > 0
          ? -this.sectionTwoNarrowScroll.toFixed(3)
          : Math.abs(this.sectionTwoNarrowScroll.toFixed(3))
      }rem)`;
      this.sectionTwoImageRight.style.transform = `translateX(${this.sectionTwoNarrowScroll.toFixed(3)}rem)`;
    }

    // console.log(this.sectionTwoNarrowScroll, (window.pageYOffset - this.scrollEventTwo) / 20);
    //renew scrollEvent
    this.scrollEventTwo = window.pageYOffset;
  }
  wideActivateIndivTwo() {
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

  narrActivateIndivThree() {
    if (this.scrollEventThree < window.pageYOffset) {
      // console.log(this.sectionThreeNarrowScroll);
      //headline image one
      this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll + (window.pageYOffset - this.scrollEventThree) / 65;
      this.sectionThreeImage.style.transform = `translateX(${this.sectionThreeNarrowScroll}rem) translateY(-${this.sectionThreeNarrowScroll}rem) `;
    }
    if (this.scrollEventThree > window.pageYOffset) {
      //headline image one
      this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll - (this.scrollEventThree - window.pageYOffset) / 65;
      this.sectionThreeImage.style.transform = `translateX(${this.sectionThreeNarrowScroll}rem) translateY(-${this.sectionThreeNarrowScroll}rem)`;
    }
    this.scrollEventThree = window.pageYOffset;
  }
  wideActivateIndivThree() {
    if (this.scrollEventThree < window.pageYOffset) {
      //headline image one
      this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll + (window.pageYOffset - this.scrollEventThree) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeNarrowScroll}rem)`;
    }
    if (this.scrollEventThree > window.pageYOffset) {
      //headline image one
      this.sectionThreeNarrowScroll = this.sectionThreeNarrowScroll - (this.scrollEventThree - window.pageYOffset) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeNarrowScroll}rem)`;
    }
    this.scrollEventThree = window.pageYOffset;
  }

  narrActivateIndivFour() {
    if (this.scrollEventFour < window.pageYOffset) {
      //headline image one
      this.sectionFourNarrowScroll = this.sectionFourNarrowScroll + (window.pageYOffset - this.scrollEventFour) / 60;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourNarrowScroll}rem)`;
    }
    if (this.scrollEventFour > window.pageYOffset) {
      //headline image one
      this.sectionFourNarrowScroll = this.sectionFourNarrowScroll - (this.scrollEventFour - window.pageYOffset) / 60;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourNarrowScroll}rem)`;
    }
    this.scrollEventFour = window.pageYOffset;
  }
  wideActivateIndivFour() {
    // console.log('wide Activated on div4');
  }
}

export default new IndividualView();
