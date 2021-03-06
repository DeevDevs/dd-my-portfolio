class IndividualView {
  headerBox = document.querySelector('.header-menu');
  footerBox = document.querySelector('.footer-menu');
  indivScrolledSection = document.querySelector('.indiv-section__scrolled-div');
  indivMainSection = document.querySelector('.indiv-section__main');
  indivContentSection = document.querySelector('.indiv-section__content');
  allIndivSections = document.querySelectorAll('.indiv-section-box');
  allIndivTextBoxes = document.querySelectorAll('.indiv-headline-text-box');
  allParagraphBoxes = document.querySelectorAll('.indiv-par-box');
  scrollBackBtn = document.querySelector('.scroll-back__btn-div');

  totalNumOfSections;
  maxWidthPossible;
  mode = 'desktop';
  thisProjectName = document.querySelector('.this-project__name').textContent;

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
  sectionFourWideScroll = -3;

  indivSectionsObserver = new IntersectionObserver(this.runScrollAnimation.bind(this), { root: null, threshold: 0.05 });

  constructor() {
    this.totalNumOfSections = document.getElementById('4-indiv') ? 4 : 3;

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.setProjectColor(this.thisProjectName);

    window.addEventListener('load', this.sizeScrolledDiv.bind(this));

    window.addEventListener(
      'resize',
      function () {
        this.maxWidthPossible =
          window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight) - window.innerWidth;
        this.indivScrolledSection.style.height = `${
          window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight)
        }px`;
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

    this.scrollBackBtn.addEventListener('click', this.indivScrollBack.bind(this));
  }

  setProjectColor(projectName) {
    //prettier-ignore
    const projects = [{name: 'mapty', color: 'rgba(106, 115, 116, 0.735)',},
      {name: 'bankist-page', color: 'rgba(27, 149, 27, 0.743)',},
      {name: 'bankist-app', color: 'rgba(227, 204, 52, 0.911)',},
      {name: 'pig-game', color: '#af1e56dc',},
      {name: 'natours-app', color: 'rgba(39, 144, 76, 0.754)',},
      {name: 'forkify-app', color: '#da8c32d5',},
      {name: 'connect-four', color: '#beb700d0',},
      {name: 'my-portfolio', color: '#7f8dc9e3',},
    ];
    const settings = projects.find((pr) => pr.name === projectName);
    this.allIndivTextBoxes.forEach((box) => (box.style.backgroundColor = settings.color));
    if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches) {
      this.allParagraphBoxes.forEach((box) => (box.style.backgroundColor = settings.color));
    } else {
      this.allParagraphBoxes.forEach((box) => (box.style.borderLeft = `6px solid ${settings.color}`));
    }
  }

  sizeScrolledDiv() {
    //counting the width of the screen to adjust height of the scrolled div
    this.indivScrolledSection.style.height = `${
      window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight)
    }px`;
    this.maxWidthPossible =
      window.innerWidth * this.totalNumOfSections - (window.innerWidth - window.innerHeight) - window.innerWidth;
    //add desktop classes, if the user has desktop
    if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 1080) this.toggleSmartphoneMode();
  }

  indivScrollBack() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleSmartphoneMode() {
    this.indivScrollBack();
    //Real Features to Switch
    this.headerBox.classList.remove('header-scroll-started');
    this.footerBox.classList.remove('footer-scroll-started');
    this.indivMainSection.classList.remove('main-scroll-started');
    this.scrollBackBtn.classList.add('scroll-back__div-hidden');
    if (window.innerWidth <= 1080) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(0)`;
      this.headlineImage.style.transform = `translateX(0)`;
      this.sectionTwoImageRight.style.transform = `translateY(0)`;
      this.sectionTwoImageLeft.style.transform = `translateY(0)`;
      this.sectionThreeImage.style.transform = `translateX(0)`;
      if (this.totalNumOfSections === 4) this.sectionFourImage.style.transform = `translateY(0)`;
    }
    if (window.innerWidth >= 1080) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(0)`;
      this.headlineImage.style.transform = `translateX(30rem)`;
      this.sectionTwoImageRight.style.transform = `translateY(10rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(10rem)`;
      this.sectionThreeImage.style.transform = `translateX(0)`;
      if (this.totalNumOfSections === 4) this.sectionFourImage.style.transform = `translateY(-3rem)`;
    }
  }

  runScrollAnimation(entry, observer) {
    if (!window.matchMedia('(hover: hover)').matches) {
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
    observer.unobserve(entry[0].target);
  }

  wideActivateIndivOne() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEvent < window.pageYOffset) {
      if (!this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.style.transition = 'transform 0.3s linear, opacity 0.3s linear';
        this.footerBox.style.transition = 'transform 0.3s linear';
        this.headerBox.classList.add('header-scroll-started');
        this.footerBox.classList.add('footer-scroll-started');
        this.indivMainSection.classList.add('main-scroll-started');
        this.scrollBackBtn.classList.remove('scroll-back__div-hidden');
      }
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px)`;
      this.headlineImageWideScroll = this.headlineImageWideScroll - (window.pageYOffset - this.scrollEvent) / 40;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }
    if (this.scrollEvent > window.pageYOffset) {
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px`;
      if (this.scrollEvent < 20 && this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.classList.remove('header-scroll-started');
        this.footerBox.classList.remove('footer-scroll-started');
        this.indivMainSection.classList.remove('main-scroll-started');
        this.scrollBackBtn.classList.add('scroll-back__div-hidden');
      }
      this.headlineImageWideScroll = this.headlineImageWideScroll + (this.scrollEvent - window.pageYOffset) / 40;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }

    //renew scrollEvent
    this.scrollEvent = window.pageYOffset;
  }

  wideActivateIndivTwo() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEventTwo < window.pageYOffset) {
      this.sectionTwoWideScroll = this.sectionTwoWideScroll - (window.pageYOffset - this.scrollEventTwo) / 90;
      this.sectionTwoImageRight.style.transform = `translateY(${
        this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll)
      }rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(${this.sectionTwoWideScroll}rem)`;
    }
    if (this.scrollEventTwo > window.pageYOffset) {
      this.sectionTwoWideScroll = this.sectionTwoWideScroll + (this.scrollEventTwo - window.pageYOffset) / 90;
      this.sectionTwoImageRight.style.transform = `translateY(${
        this.sectionTwoWideScroll > 0 ? -this.sectionTwoWideScroll : Math.abs(this.sectionTwoWideScroll)
      }rem)`;
      this.sectionTwoImageLeft.style.transform = `translateY(${this.sectionTwoWideScroll}rem)`;
    }
    //renew scrollEvent
    this.scrollEventTwo = window.pageYOffset;
  }

  wideActivateIndivThree() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEventThree < window.pageYOffset) {
      this.sectionThreeScroll = this.sectionThreeScroll + (window.pageYOffset - this.scrollEventThree) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeScroll}rem)`;
    }
    if (this.scrollEventThree > window.pageYOffset) {
      this.sectionThreeScroll = this.sectionThreeScroll - (this.scrollEventThree - window.pageYOffset) / 40;
      this.sectionThreeImage.style.transform = `translateX(-${this.sectionThreeScroll}rem)`;
    }
    this.scrollEventThree = window.pageYOffset;
  }

  wideActivateIndivFour() {
    if (window.innerWidth <= 1080) return;
    if (this.scrollEventFour < window.pageYOffset) {
      this.sectionFourWideScroll = this.sectionFourWideScroll + (window.pageYOffset - this.scrollEventFour) / 400;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourWideScroll}rem)`;
    }
    if (this.scrollEventFour > window.pageYOffset) {
      this.sectionFourWideScroll = this.sectionFourWideScroll - (this.scrollEventFour - window.pageYOffset) / 400;
      this.sectionFourImage.style.transform = `translateY(${this.sectionFourWideScroll}rem)`;
    }
    this.scrollEventFour = window.pageYOffset;
  }
}

export default IndividualView;
