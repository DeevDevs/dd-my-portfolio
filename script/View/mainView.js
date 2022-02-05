class MainView {
  advertSections = document.querySelectorAll('.advert__section');
  viewportHeight = window.innerHeight;
  mainSection = document.querySelector('.sec');
  mainSections = document.querySelectorAll('.sec__main');
  arrowLeft = document.querySelector('.arrow-left--container');
  arrowRight = document.querySelector('.arrow-right--container');
  currentSlide = 0;
  xDown = null;
  yDown = null;

  constructor() {
    window.addEventListener('scroll', this.checkSectionPosition.bind(this));
    // prettier-ignore
    this.arrowLeft.addEventListener('click', function () {this.swipeBtn('left');}.bind(this));
    // prettier-ignore
    this.arrowRight.addEventListener('click',function () {this.swipeBtn('right');}.bind(this));
    //TESTING
    this.mainSection.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.mainSection.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  }

  checkSectionPosition() {
    this.advertSections.forEach((section) => {
      const positionY = section.getBoundingClientRect().y;
      if (positionY > 0 - this.viewportHeight / 9 && positionY < this.viewportHeight - this.viewportHeight / 9) {
        section.querySelector('.advert__section--headline').classList.add('zoomed');
        section.querySelector('.advert__section--image-container').classList.add('zoomed');
        section.querySelector('.advert__section--text-container').classList.add('zoomed');
      } else if (positionY < 0 + this.viewportHeight / 9 || positionY > this.viewportHeight - this.viewportHeight / 9) {
        section.querySelector('.advert__section--headline').classList.remove('zoomed');
        section.querySelector('.advert__section--image-container').classList.remove('zoomed');
        section.querySelector('.advert__section--text-container').classList.remove('zoomed');
      }
    });
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
    document.querySelector('.about-me').style.transform = `translateX(${(0 - this.currentSlide) * 100}vw)`;
    document.querySelector('.learning').style.transform = `translateX(${(1 - this.currentSlide) * 100}vw)`;
    document.querySelector('.projects').style.transform = `translateX(${(2 - this.currentSlide) * 100}vw)`;
    document.querySelector('.experience').style.transform = `translateX(${(3 - this.currentSlide) * 100}vw)`;
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
}

export default new MainView();
