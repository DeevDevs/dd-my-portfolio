class QualificationsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text-box');
  introIcon = document.querySelector('.intro-part__icon');
  choiceBox = document.querySelector('.choice-part');
  towerBox = document.querySelector('.choice-part__towers');
  bothTowers = document.querySelectorAll('.towers');
  towerDescription = document.querySelectorAll('.tower-description');
  leftTower = document.querySelector('.tower-short');
  rightTower = document.querySelector('.tower-long');
  imgBoxesShort = document.querySelectorAll('.img-box__short');
  imgBoxesLong = document.querySelectorAll('.img-box__long');
  allImageBoxes = document.querySelectorAll('.img-box');
  tempBtn = document.querySelector('.choice-part__question');
  towersBase = document.querySelector('.towers-base');
  bothQuals = document.querySelectorAll('.quals');
  qualsShort = document.querySelector('.quals-short');
  qualsLong = document.querySelector('.quals-long');
  btnCloseQualsBox = document.querySelector('.close-quals-btn__box');
  btnCloseQuals = document.querySelector('.close-quals__btn');
  eduIT = document.querySelector('.close-quals-it');
  eduAll = document.querySelector('.close-quals-all');
  sectionDetails = document.querySelector('.details-section');
  detailsCloseBtn = document.querySelector('.details__button-close');
  overlay = document.querySelector('.overlay');

  qualsChosen;
  transformConditions;

  qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  allQualsImages = document.querySelectorAll('.quals-box__image-container');

  constructor() {
    this.allQualsImages.forEach((img) =>
      img.addEventListener(
        'mousemove',
        function (e) {
          this.tiltQualsImage(e);
        }.bind(this)
      )
    );
    this.allQualsImages.forEach((img) =>
      img.addEventListener(
        'mouseout',
        function (e) {
          this.returnTiltedImage(e);
        }.bind(this)
      )
    );
    this.qualSectionObserver.observe(this.choiceBox);
    // this.positionImages();
    // prettier-ignore
    this.bothTowers.forEach((tower) => {
      tower.addEventListener('click', function (e) {
        this.chooseTower(e);
      }.bind(this));
    tower.addEventListener('mouseover', function (e) {
      this.imageStandOut(e);
      }.bind(this));
      tower.addEventListener('mouseout', function (e) {
        this.returnImageTransformValues(e);
        }.bind(this));
      
    });
    //prettier-ignore
    this.btnCloseQuals.addEventListener('click', function () {
        this.closeDisplayQualifications(this.qualsChosen);
        this.displayTowers();
        this.choiceBox.style.marginTop = '0';
    }.bind(this));

    this.detailsCloseBtn.addEventListener('click', this.displayDetails.bind(this));
    this.bothQuals.forEach((quals) => {
      quals.addEventListener(
        'click',
        function (e) {
          this.renderDisplayDetails(e);
        }.bind(this)
      );
    });
  }

  returnTiltedImage(e) {
    const element = e.target.closest('.quals-box__image-container');
    element.style.transform = 'rotateX(0deg) rotateY(0deg) skew(15deg)';
    element.style.boxShadow = '0px 0px 10px var(--logo-image-shadow)';
  }

  tiltQualsImage(e) {
    const element = e.target.closest('.quals-box__image-container');

    if (e.offsetX < e.target.offsetWidth / 3 && e.offsetY < e.target.offsetHeight / 3) {
      console.log(e);
      element.style.transform = 'rotateX(12deg) rotateY(-12deg) skew(15deg)';
      element.style.boxShadow = '5px 5px 5px var(--logo-image-shadow)';
    }
    if (
      e.offsetX > e.target.offsetWidth / 3 &&
      e.offsetX < (e.target.offsetWidth / 3) * 2 &&
      e.offsetY < e.target.offsetHeight / 3
    ) {
      console.log(e);
      element.style.transform = 'rotateX(12deg) rotateY(0) skew(15deg)';
      element.style.boxShadow = '0px 5px 5px var(--logo-image-shadow)';
    }
    if (e.offsetX > (e.target.offsetWidth / 3) * 2 && e.offsetY < e.target.offsetHeight / 3) {
      console.log(e);
      element.style.transform = 'rotateX(12deg) rotateY(12deg) skew(15deg)';
      element.style.boxShadow = '-5px 5px 5px var(--logo-image-shadow)';
    }
    if (
      e.offsetX < e.target.offsetWidth / 3 &&
      e.offsetY > e.target.offsetHeight / 3 &&
      e.offsetY < (e.target.offsetHeight / 3) * 2
    ) {
      console.log(e);
      element.style.transform = 'rotateX(0deg) rotateY(-12deg) skew(15deg)';
      element.style.boxShadow = '5px 0px 5px var(--logo-image-shadow)';
    }
    if (e.offsetX < e.target.offsetWidth / 3 && e.offsetY > 2 * (e.target.offsetHeight / 3)) {
      console.log(e);
      element.style.transform = 'rotateX(-12deg) rotateY(-12deg) skew(15deg)';
      element.style.boxShadow = '5px -5px 5px var(--logo-image-shadow)';
    }
    if (
      e.offsetX > e.target.offsetWidth / 3 &&
      e.offsetX < 2 * (e.target.offsetWidth / 3) &&
      e.offsetY > 2 * (e.target.offsetHeight / 3)
    ) {
      console.log(e);
      element.style.transform = 'rotateX(-12deg) rotateY(0deg) skew(15deg)';
      element.style.boxShadow = '0px -5px 5px var(--logo-image-shadow)';
    }
    if (e.offsetX > 2 * (e.target.offsetWidth / 3) && e.offsetY > 2 * (e.target.offsetHeight / 3)) {
      console.log(e);
      element.style.transform = 'rotateX(-12deg) rotateY(12deg) skew(15deg)';
      element.style.boxShadow = '-5px -5px 5px var(--logo-image-shadow)';
    }
    if (
      e.offsetX > 2 * (e.target.offsetWidth / 3) &&
      e.offsetY > e.target.offsetHeight / 3 &&
      e.offsetY < 2 * (e.target.offsetHeight / 3)
    ) {
      console.log(e);
      element.style.transform = 'rotateX(0deg) rotateY(12deg) skew(15deg)';
      element.style.boxShadow = '-5px 0px 5px var(--logo-image-shadow)';
    }
    if (
      e.offsetX > e.target.offsetWidth / 3 &&
      e.offsetX < 2 * (e.target.offsetWidth / 3) &&
      e.offsetY > e.target.offsetHeight / 3 &&
      e.offsetY < 2 * (e.target.offsetHeight / 3)
    ) {
      console.log(e);
      element.style.transform = 'rotateX(0deg) rotateY(0deg) skew(15deg)';
      element.style.boxShadow = '0px 0px 10px var(--logo-image-shadow)';
    }
  }

  cardLikeImages(entry, observer) {
    if (!entry[0].isIntersecting) return;
    if (entry[0].isIntersecting) {
      this.choiceBox.classList.remove('section-hidden');
      this.positionImages();
    }
  }

  positionImages() {
    // prettier-ignore
    Array.prototype.slice.call(this.imgBoxesShort, 0).reverse().forEach((box, i) => {
        setTimeout(function () {this.imageStyleRender(box);}.bind(this),i * 170);});
    // prettier-ignore
    Array.prototype.slice.call(this.imgBoxesLong, 0).reverse().forEach((box, i) => {
        setTimeout(function () {this.imageStyleRender(box);}.bind(this),i * 120);});
  }

  imageStandOut(e) {
    if (!e.target.closest('.img-box')) return;
    const element = e.target.closest('.img-box');
    element.style.transform = `translateZ(10rem) translateY(${+element.dataset.pos / 1.5}rem) translateX(${
      element.dataset.pos / 2
    }rem)`;
    element.style.opacity = `1`;
  }

  returnImageTransformValues(e) {
    if (!e.target.closest('.img-box')) return;
    this.imageStyleRender(e.target.closest('.img-box'));
  }

  imageStyleRender(element) {
    element.style.transform = `translateZ(-${element.dataset.pos}rem) translateY(${
      +element.dataset.pos / 1.5
    }rem) translateX(${element.dataset.pos / 2}rem)`;
    element.style.opacity = `${1 - +`${element.dataset.pos >= 10 ? 9.5 : element.dataset.pos}` / 10 + 0.05}`;
  }

  // kahnAttached(entry, observer) {
  //   console.log(entry[0]);
  //   if (!entry[0].isIntersecting && entry[0].boundingClientRect.top <= 0) {
  //     this.kahnBox.classList.add('detatch');
  //   }
  //   if (entry[0].isIntersecting && entry[0].boundingClientRect.top >= 0) this.kahnBox.classList.remove('detatch');
  // }

  chooseTower(e) {
    if (e.target.closest('.tower-short')) {
      //note the chosen tower
      this.qualsChosen = 'short';
      //move the other tower away
      this.imgBoxesLong.forEach((box) => {
        box.style.transform = 'translateX(-55rem)';
      });
      //move the chosen tower to the center
      window.innerWidth <= 639
        ? (this.leftTower.style.transform = 'translateY(25vh)')
        : (this.leftTower.style.transform = 'translateY(25vh) translateX(-25vw)');
      //after 1200ms, make all the cards lose opacity one by one
      // prettier-ignore
      setTimeout(function () {this.imgBoxesShort.forEach((img) => {
            setTimeout(function () {img.style.opacity = 0;}.bind(this),img.dataset.pos * 100);});
        }.bind(this),1200);
    }
    if (e.target.closest('.tower-long')) {
      //note the chosen tower
      this.qualsChosen = 'long';
      //move the other tower away
      this.imgBoxesShort.forEach((box) => {
        box.style.transform = 'translateX(55rem)';
      });
      //move the chosen tower to the center
      window.innerWidth <= 639
        ? (this.rightTower.style.transform = 'translateY(-25vh)')
        : (this.rightTower.style.transform = 'translateY(-18vh) translateX(22vw)');
      //after 1200ms, make all the cards lose opacity one by one
      // prettier-ignore
      setTimeout(function () {this.imgBoxesLong.forEach((img) => {
        setTimeout(function () {img.style.opacity = 0;}.bind(this),img.dataset.pos * 100);});
    }.bind(this),1200);
    }
    //after 1900ms make the chosen quals show up with the description over them
    setTimeout(
      function () {
        this.openDisplayQualifications(this.qualsChosen);
        if (this.qualsChosen === 'short') {
          this._makeElementAppear(this.eduIT, 500, 'inline-block');
        } else {
          this._makeElementAppear(this.eduAll, 500, 'inline-block');
        }
      }.bind(this),
      1900
    );
    //make tower descriptions disappear together with the shift of towers
    this.towerDescription.forEach((desc) => {
      this._makeElementDisappear(desc, 1900);
    });
    //display close button and hide tower box (behind the scenes, return the towers back to the positions)
    setTimeout(() => {
      this._makeElementAppear(this.btnCloseQuals, 500, 'inline-block');
      this.towerBox.style.display = 'none';
      this.bothTowers.forEach((tower) => {
        tower.style.transform = 'translateX(0) translateY(0)';
      });
    }, 1800);
  }

  displayTowers() {
    setTimeout(
      function () {
        this.towerBox.style.display = 'flex';
        this.allImageBoxes.forEach((img) => this.imageStyleRender(img));
        this.towerDescription.forEach((desc) => {
          this._makeElementAppear(desc, 50, 'block');
        });
      }.bind(this),
      950
    );
  }

  openDisplayQualifications(type) {
    if (type === 'short') {
      this._makeElementAppear(this.qualsShort, 300, 'grid');
      this._makeElementAppear(this.eduIT, 300, 'inline-block');
    }
    if (type === 'long') {
      this._makeElementAppear(this.qualsLong, 300, 'grid');
      this._makeElementAppear(this.eduAll, 300, 'inline-block');
    }
    this.btnCloseQualsBox.style.display = 'flex';
    this.choiceBox.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  closeDisplayQualifications(type) {
    if (type === 'short') {
      this._makeElementDisappear(this.qualsShort, 600);
      this._makeElementDisappear(this.eduIT, 500);
    }
    if (type === 'long') {
      this._makeElementDisappear(this.qualsLong, 600);
      this._makeElementDisappear(this.eduAll, 500);
    }
    this._makeElementDisappear(this.btnCloseQuals, 500);
  }

  _makeElementAppear(element, timer, display) {
    element.style.display = display;
    setTimeout(
      function () {
        element.style.opacity = 1;
      }.bind(this),
      timer
    );
  }

  _makeElementDisappear(element, timer) {
    element.style.opacity = 0;
    setTimeout(
      function () {
        element.style.display = 'none';
      }.bind(this),
      timer
    );
  }

  renderDisplayDetails(e) {
    if (!e.target.closest('.quals-box')) return;
    const id = e.target.closest('.quals-box').id;
    console.log(id);
    this.displayDetails();
  }

  displayDetails() {
    if (this.sectionDetails.style.display === 'flex') {
      this._makeElementDisappear(this.overlay, 300);
      this._makeElementDisappear(this.sectionDetails, 200);
      this.sectionDetails.style.transform = `translateY(3rem)`;
    } else {
      this._makeElementAppear(this.overlay, 300, 'block');
      this.sectionDetails.style.display = 'flex';
      setTimeout(
        function () {
          this.sectionDetails.style.opacity = 1;
          this.sectionDetails.style.transform = `translateY(0)`;
        }.bind(this),
        20
      );
    }
  }
}

export default new QualificationsView();
