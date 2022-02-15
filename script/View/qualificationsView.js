class QualificationsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text-box');
  // kahnInvisible = document.querySelector('.kahn-part__invisible');
  choiceBox = document.querySelector('.choice-part');
  // kahnBox = document.querySelector('.kahn-part');
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
  // kahnObserver = new IntersectionObserver(this.kahnAttached.bind(this), {
  //   root: null,
  //   threshold: 1,
  // });

  qualsChosen;
  transformConditions;

  constructor() {
    // this.kahnObserver.observe(this.kahnInvisible);
    this.positionImages();
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

  positionImages(width = window.innerWidth) {
    console.log(width < 1080);
    this.imgBoxesShort.forEach((box) => {
      console.log(+box.dataset.pos);
      this.imageStyleRender(box);
      // box.style.transform = `translateZ(-${box.dataset.pos}rem) translateY(${+box.dataset.pos / 1.5}rem) translateX(${
      //   box.dataset.pos / 2
      // }rem)`;
      // box.style.opacity = 1 - +box.dataset.pos / 10;
    });
    this.imgBoxesLong.forEach((box) => {
      console.log(+box.dataset.pos);
      this.imageStyleRender(box);
      // box.style.transform = `translateZ(-${box.dataset.pos}rem) translateY(${+box.dataset.pos / 1.5}rem) translateX(${
      //   box.dataset.pos / 2
      // }rem)`;
      // box.style.opacity = 1 - +box.dataset.pos / 10;
    });
    // if (width > 640) {
    //   this.imgBoxesShort.forEach((box) => {
    //     console.log(+box.dataset.pos);
    //     box.style.transform = `translateZ(${box.dataset.pos}rem) translateY(${+box.dataset.pos / 8}rem) translateX(${
    //       +box.dataset.pos / 1
    //     }rem)`;
    //     box.style.opacity = 1 - (1 - +box.dataset.pos / 10) + 0.4;
    //   });
    //   this.imgBoxesLong.forEach((box) => {
    //     console.log(+box.dataset.pos);
    //     box.style.transform = `translateZ(${box.dataset.pos}rem) translateY(${+box.dataset.pos / 8}rem) translateX(${
    //       +box.dataset.pos / 1
    //     }rem)`;
    //     box.style.opacity = 1 - (1 - +box.dataset.pos / 10) + 0.1;
    //   });
    // }
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

  kahnAttached(entry, observer) {
    console.log(entry[0]);
    if (!entry[0].isIntersecting && entry[0].boundingClientRect.top <= 0) {
      this.kahnBox.classList.add('detatch');
    }
    if (entry[0].isIntersecting && entry[0].boundingClientRect.top >= 0) this.kahnBox.classList.remove('detatch');
  }

  chooseTower(e) {
    this.choiceBox.scrollIntoView({ block: 'start', behavior: 'smooth' });
    if (e.target.closest('.tower-short')) {
      this.qualsChosen = 'short';
      this.rightTower.style.opacity = '0';
      this.rightTower.style.visibility = 'hidden';
      window.innerWidth <= 639
        ? (this.leftTower.style.transform = 'translateY(25vh)')
        : (this.leftTower.style.transform = 'translateY(25vh) translateX(-25vw)');
      setTimeout(
        function () {
          this.leftTower.style.opacity = '0';
        }.bind(this),
        1200
      );
      setTimeout(
        function () {
          this.openDisplayQualifications('short');
          this._makeElementAppear(this.eduIT, 500, 'inline-block');
        }.bind(this),
        1800
      );
    }
    if (e.target.closest('.tower-long')) {
      this.qualsChosen = 'long';
      this.leftTower.style.opacity = '0';
      this.leftTower.style.visibility = 'hidden';
      window.innerWidth <= 639
        ? (this.rightTower.style.transform = 'translateY(-25vh)')
        : (this.rightTower.style.transform = 'translateY(-18vh) translateX(22vw)');
      //prettier-ignore
      setTimeout(function () {this.rightTower.style.opacity = '0';}.bind(this),1200);
      setTimeout(
        function () {
          this.openDisplayQualifications('long');
          this._makeElementAppear(this.eduAll, 500, 'inline-block');
        }.bind(this),
        1800
      );
    }
    this.towerDescription.forEach((desc) => {
      this._makeElementDisappear(desc, 1700);
    });
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
        this.bothTowers.forEach((tower) => {
          tower.style.visibility = 'visible';
          setTimeout(function () {
            tower.style.opacity = '1';
          }, 100);
        });
        this.towerDescription.forEach((desc) => {
          this._makeElementAppear(desc, 500, 'block');
        });
      }.bind(this),
      550
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
  }

  closeDisplayQualifications(type) {
    if (type === 'short') {
      this._makeElementDisappear(this.qualsShort, 500);
      this._makeElementDisappear(this.eduIT, 500);
    }
    if (type === 'long') {
      this._makeElementDisappear(this.qualsLong, 500);
      this._makeElementDisappear(this.eduAll, 500);
    }
    this._makeElementDisappear(this.btnCloseQuals, 500);
    // this._makeElementAppear(this.kahnBox, 1000, 'flex');
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
      this._makeElementDisappear(this.sectionDetails, 300);
    } else {
      this._makeElementAppear(this.overlay, 300, 'block');
      this._makeElementAppear(this.sectionDetails, 300, 'flex');
    }
  }
}

export default new QualificationsView();
