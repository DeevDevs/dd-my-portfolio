class QualificationsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text-box');
  kahnInvisible = document.querySelector('.kahn-part__invisible');
  choiceBox = document.querySelector('.choice-part');
  kahnBox = document.querySelector('.kahn-part');
  towerBox = document.querySelector('.choice-part__towers');
  bothTowers = document.querySelectorAll('.towers');
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
  kahnObserver = new IntersectionObserver(this.kahnAttached.bind(this), {
    root: null,
    threshold: 1,
  });

  qualsChosen;

  constructor() {
    this.kahnObserver.observe(this.kahnInvisible);
    //prettier-ignore
    this.bothTowers.forEach((tower) => tower.addEventListener('click', function (e) {
        this.chooseTower(e);
    }.bind(this)));
    //prettier-ignore
    this.btnCloseQuals.addEventListener('click', function () {
        this.closeDisplayQualifications(this.qualsChosen);
        this.displayTowers();
    }.bind(this));
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
    this.towersBase.style.visibility = 'hidden';
    if (e.target.closest('.tower-short')) {
      this.qualsChosen = 'short';
      this.rightTower.style.opacity = '0';
      this.rightTower.style.visibility = 'hidden';
      this.imgBoxesLong.forEach((box) => (box.style.visibility = 'hidden'));
      // this.leftTower.style.transform = 'translateX(50%)';
      window.innerWidth <= 1079
        ? (this.leftTower.style.transform = 'translateX(25vw)')
        : (this.leftTower.style.transform = 'translateY(18vh)');
      //prettier-ignore
      setTimeout(function () {this.leftTower.style.visibility = 'hidden';}.bind(this),900);
      this.imgBoxesShort.forEach((box) => {
        //prettier-ignore
        setTimeout(function () {box.style.transform = 'scale(6)';}.bind(this),1200);
        //prettier-ignore
        setTimeout(function () {box.style.opacity = '0';}.bind(this),1200);
        //prettier-ignore
        setTimeout(function () {box.style.visibility = 'hidden';}.bind(this),1400);
      });
      setTimeout(
        function () {
          this.towerBox.style.display = 'none';
          this.openDisplayQualifications('short');
          this.choiceBox.classList.add('choice-background');
          this.introBox.classList.add('choice-background');
          this._makeElementDisappear(this.kahnBox, 500);
          this._makeElementAppear(this.btnCloseQuals, 500, 'inline-block');
          this._makeElementAppear(this.eduIT, 500, 'inline-block');
        }.bind(this),
        1800
      );
    }
    if (e.target.closest('.tower-long')) {
      this.qualsChosen = 'long';
      this.leftTower.style.opacity = '0';
      this.leftTower.style.visibility = 'hidden';
      this.imgBoxesShort.forEach((box) => (box.style.visibility = 'hidden'));
      // this.rightTower.style.transform = 'translateX(-50%)';
      window.innerWidth <= 1079
        ? (this.rightTower.style.transform = 'translateX(-25vw)')
        : (this.rightTower.style.transform = 'translateY(-18vh)');
      //prettier-ignore
      setTimeout(function () {this.rightTower.style.visibility = 'hidden';}.bind(this),900);
      this.imgBoxesLong.forEach((box) => {
        //prettier-ignore
        setTimeout(function () {box.style.transform = 'scale(6)';}.bind(this),1200);
        //prettier-ignore
        setTimeout(function () {box.style.opacity = '0';}.bind(this),1200);
        //prettier-ignore
        setTimeout(function () {box.style.visibility = 'hidden';}.bind(this),1400);
      });
      setTimeout(
        function () {
          this.towerBox.style.display = 'none';
          this.openDisplayQualifications('long');
          this.choiceBox.classList.add('choice-background');
          this.introBox.classList.add('choice-background');
          this._makeElementDisappear(this.kahnBox, 500);
          this._makeElementAppear(this.btnCloseQuals, 500, 'inline-block');
          this._makeElementAppear(this.eduAll, 500, 'inline-block');
        }.bind(this),
        1800
      );
    }
    setTimeout(() => {
      this.bothTowers.forEach((tower) => {
        tower.style.transform = 'translateX(0)';
      });
      this.allImageBoxes.forEach((box) => {
        box.style.transform = 'scale(1)';
      });
    }, 1800);
  }

  displayTowers() {
    setTimeout(
      function () {
        this.towerBox.style.display = 'flex';
        this.allImageBoxes.forEach((box) => {
          box.style.visibility = 'visible';
          setTimeout(function () {
            box.style.opacity = '1';
          }, 50);
        });
        this.bothTowers.forEach((tower) => {
          tower.style.visibility = 'visible';
          setTimeout(function () {
            tower.style.opacity = '1';
          }, 50);
        });
        this.towersBase.style.visibility = 'visible';
        this.choiceBox.classList.remove('choice-background');
        this.introBox.classList.remove('choice-background');
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
    this._makeElementAppear(this.kahnBox, 1000, 'flex');
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
}

export default new QualificationsView();
