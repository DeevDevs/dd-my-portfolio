class QualificationsView {
  choiceBox = document.querySelector('.choice-part');
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
  btnCloseEqualsBox = document.querySelector('.close-equals-btn__box');
  btnCloseQuals = document.querySelector('.close-equals__btn');

  qualsChosen;

  constructor() {
    //prettier-ignore
    this.bothTowers.forEach((tower) => tower.addEventListener('click', function (e) {
        this.chooseTower(e);
    }.bind(this)));
    //prettier-ignore
    this.btnCloseQuals.addEventListener('click', function () {
        this.toggleDisplayQualifications(this.qualsChosen, true);
        this.displayTowers();
    }.bind(this));
  }

  chooseTower(e) {
    this.choiceBox.scrollIntoView({ behavior: 'smooth' });
    this.towersBase.style.visibility = 'hidden';
    if (e.target.closest('.tower-short')) {
      this.qualsChosen = 'short';
      this.rightTower.style.opacity = '0';
      this.rightTower.style.visibility = 'hidden';
      this.imgBoxesLong.forEach((box) => (box.style.visibility = 'hidden'));
      this.leftTower.style.transform = 'translateX(50%)';
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
          this.toggleDisplayQualifications('short');
        }.bind(this),
        1800
      );
    }
    if (e.target.closest('.tower-long')) {
      this.qualsChosen = 'long';
      this.leftTower.style.opacity = '0';
      this.leftTower.style.visibility = 'hidden';
      this.imgBoxesShort.forEach((box) => (box.style.visibility = 'hidden'));
      this.rightTower.style.transform = 'translateX(-50%)';
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
          this.toggleDisplayQualifications('long');
        }.bind(this),
        1800
      );
    }
    setTimeout(() => {
      this.bothTowers.forEach((tower) => {
        tower.style.transform = 'translateX(0)';
        tower.style.opacity = '1';
      });
      this.allImageBoxes.forEach((box) => {
        box.style.transform = 'scale(1)';
        box.style.opacity = '1';
      });
    }, 1800);
  }

  displayTowers() {
    this.towerBox.style.display = 'flex';
    this.allImageBoxes.forEach((box) => {
      box.style.visibility = 'visible';
    });
    this.bothTowers.forEach((tower) => {
      tower.style.visibility = 'visible';
    });
    this.towersBase.style.visibility = 'visible';
  }

  toggleDisplayQualifications(type, close = false) {
    if (type === 'short') {
      this.qualsShort.style.display = `${close ? 'none' : 'flex'}`;
      setTimeout(
        function () {
          this.qualsShort.style.opacity = `${close ? 0 : 1}`;
        }.bind(this),
        200
      );
    }
    if (type === 'long') {
      this.qualsLong.style.display = `${close ? 'none' : 'flex'}`;
      setTimeout(
        function () {
          this.qualsLong.style.opacity = `${close ? 0 : 1}`;
        }.bind(this),
        200
      );
    }
    this.btnCloseEqualsBox.style.display = `${close ? 'none' : 'block'}`;
  }
}

export default new QualificationsView();
