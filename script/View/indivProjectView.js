class IndividualView {
  headerBox = document.querySelector('.header-menu');
  footerBox = document.querySelector('.footer-menu');
  indivMainSection = document.querySelector('.indiv-section__main');
  indivContentSection = document.querySelector('.indiv-section__content');

  headlineImage = document.querySelector('.indiv-img__one');
  headlineImageNarrowScroll = 12;
  headlineImageWideScroll = 30;
  scrollEvent;
  constructor() {
    if (window.innerWidth < 1080) {
      window.addEventListener('scroll', this.narrowScreenScroll.bind(this));
    }
    if (window.innerWidth > 1080) {
      window.addEventListener('scroll', this.wideScreenScroll.bind(this));
    }
  }

  narrowScreenScroll() {
    if (this.scrollEvent < window.pageYOffset) {
      //headline image
      this.headlineImageNarrowScroll = this.headlineImageNarrowScroll - (window.pageYOffset - this.scrollEvent) / 15;
      this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
    }
    if (this.scrollEvent > window.pageYOffset) {
      //headline image
      this.headlineImageNarrowScroll = this.headlineImageNarrowScroll + (this.scrollEvent - window.pageYOffset) / 15;
      this.headlineImage.style.transform = `translateY(${this.headlineImageNarrowScroll}rem)`;
    }
    this.scrollEvent = window.pageYOffset;
  }

  wideScreenScroll() {
    if (this.scrollEvent < window.pageYOffset) {
      if (!this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.style.transition = 'transform 0.3s linear';
        this.footerBox.style.transition = 'transform 0.3s linear';
        this.headerBox.classList.add('header-scroll-started');
        this.footerBox.classList.add('footer-scroll-started');
        this.indivMainSection.classList.add('main-scroll-started');
      }
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px`;
      //headline image
      this.headlineImageWideScroll = this.headlineImageWideScroll - (window.pageYOffset - this.scrollEvent) / 30;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }
    if (this.scrollEvent > window.pageYOffset) {
      //   console.log(this.scrollEvent, this.headerBox.classList);
      this.indivContentSection.style.transform = `translateY(-8vh) translateX(-${this.scrollEvent}px`;
      if (this.scrollEvent < 10 && this.headerBox.classList.contains('header-scroll-started')) {
        this.headerBox.classList.remove('header-scroll-started');
        this.footerBox.classList.remove('footer-scroll-started');
        this.indivMainSection.classList.remove('main-scroll-started');
      }

      //headline image
      this.headlineImageWideScroll = this.headlineImageWideScroll + (this.scrollEvent - window.pageYOffset) / 30;
      this.headlineImage.style.transform = `translateX(${this.headlineImageWideScroll}rem)`;
    }

    //renew scrollEvent
    this.scrollEvent = window.pageYOffset;
  }
}

export default new IndividualView();
