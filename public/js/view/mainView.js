class MainView {
  allSections = document.querySelectorAll('.section');
  topMenu = document.querySelector('.top-menu');
  introBox = document.querySelector('.intro-part__glass');
  introText = document.querySelector('.welcome-phrase');
  advertSections = document.querySelectorAll('.advert__section');
  mainSections = document.querySelectorAll('.sec__main');
  mainSection = document.querySelector('.sec');
  lazyImages = document.querySelectorAll('img[data-src]');
  arrowLeft = document.querySelector('.arrow-left--container');
  arrowRight = document.querySelector('.arrow-right--container');
  currentSlide = 0;
  xDown = null;
  yDown = null;

  allSectionsObserver = new IntersectionObserver(this.revealSection.bind(this), { root: null, threshold: 0.1 });
  mainSectionObserver = new IntersectionObserver(this.hideShowMenu.bind(this), { root: null, threshold: [0.6] });
  imageObserver = new IntersectionObserver(this.loadLazyImages.bind(this), {
    root: null,
    threshold: 0,
    rootMargin: '400px',
  });
  backgroundObserver = new IntersectionObserver(this.loadBackgroundImages.bind(this), {
    root: null,
    threshold: 0,
    rootMargin: '400px',
  });

  constructor() {
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));

    this.setObserversCheckPagePosition();
    this.arrowLeft.addEventListener(
      'click',
      function () {
        this.swipeBtn('left');
      }.bind(this)
    );
    // prettier-ignore
    this.arrowRight.addEventListener('click',function () {this.swipeBtn('right');}.bind(this));
    //TESTING
    this.mainSection.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.mainSection.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  }

  setObserversCheckPagePosition() {
    setTimeout(
      function () {
        this.mainSectionObserver.observe(this.mainSection);
        this.allSections.forEach((section) => this.allSectionsObserver.observe(section));
        this.backgroundObserver.observe(this.mainSection);
        this.lazyImages.forEach((image) => this.imageObserver.observe(image));
        if (document.body.getBoundingClientRect().top < 0) {
          this.allSections.forEach((section) => section.classList.remove('section-hidden'));
        }
      }.bind(this),
      400
    );
  }

  hideShowMenu(entry, observer) {
    if (entry[0].isIntersecting) {
      this.topMenu.style.opacity = 0;
    }
    if (!entry[0].isIntersecting) {
      this.topMenu.style.opacity = 1;
    }
  }

  revealSection(entry, observer) {
    if (!entry[0].isIntersecting) return;
    if (entry[0].isIntersecting) {
      const thisSection = document.getElementById(entry[0].target.id);
      thisSection.classList.remove('section-hidden');
    }
  }

  loadLazyImages(entry, observer) {
    if (!entry[0].isIntersecting) return;

    entry[0].target.src = entry[0].target.dataset.src;
    entry[0].target.addEventListener('load', function () {
      entry[0].target.classList.remove('blurred');
    });

    observer.unobserve(entry[0].target);
  }

  loadBackgroundImages(entries, observer) {
    if (!entries[0].isIntersecting) return;
    entries[0].target.querySelectorAll('.sec__main').forEach((element) => element.classList.remove('lazy-bg'));
    observer.unobserve(entries[0].target);
  }

  swipeSlide(string) {
    if (string === 'right') {
      if (this.currentSlide >= 3) return;
      this.currentSlide++;
    }
    if (string === 'left') {
      if (this.currentSlide <= 0) return;
      this.currentSlide--;
    }
    document.getElementById('about-me').style.transform = `translateX(${(0 - this.currentSlide) * 100}vw)`;
    document.getElementById('learning').style.transform = `translateX(${(1 - this.currentSlide) * 100}vw)`;
    document.getElementById('projects').style.transform = `translateX(${(2 - this.currentSlide) * 100}vw)`;
    document.getElementById('experience').style.transform = `translateX(${(3 - this.currentSlide) * 100}vw)`;
  }

  //////////////////////// Swiping functions TESTING //////////////////////////////

  getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  handleTouchStart(evt) {
    const firstTouch = this.getTouches(evt)[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* right swipe */
        this.swipeSlide('right');
      } else {
        /* left swipe */
        this.swipeSlide('left');
      }
    }
    // else {
    //   if (yDiff > 0) {
    //     /* down swipe */
    //   } else {
    //     /* up swipe */
    //   }
    // }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  }

  swipeBtn(direction) {
    if (direction == 'left') {
      this.arrowLeft.style.opacity = '0.5';
      setTimeout(
        function () {
          this.arrowLeft.style.opacity = '0.07';
        }.bind(this),
        200
      );
    } else {
      this.arrowRight.style.opacity = '0.5';
      setTimeout(
        function () {
          this.arrowRight.style.opacity = '0.07';
        }.bind(this),
        400
      );
    }
    this.swipeSlide(direction);
  }

  addIntroMovingShadow(e) {
    const shadowParameters = this.movingShadow(e, this.introBox, 15);
    this.introText.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 4px var(--icons-shadow))`;
    // this.introIcon.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 8px var(--icons-shadow))`;
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

export default MainView;
