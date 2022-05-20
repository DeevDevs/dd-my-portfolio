class QualificationsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text');
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
  allQualsImages = document.querySelectorAll('.quals-box__image-container');
  btnCloseQualsBox = document.querySelector('.close-quals-btn__box');
  btnCloseQuals = document.querySelector('.close-quals__btn');
  eduIT = document.querySelector('.close-quals-it');
  eduAll = document.querySelector('.close-quals-all');

  sectionDetails = document.querySelector('.details-section');
  detailsCloseBtn = document.querySelector('.details__button-close');
  detailsName = document.querySelector('.details__name-text');
  detailsText = document.querySelector('.details__desription-text');
  detailsImage = document.querySelector('.details__image');
  waitingOverlay = document.querySelector('.spinner-box--overlay');
  waitingSpinner = document.querySelector('.spinner-box');
  errorMessageBox = document.querySelector('.error-message-box');
  imageViewContainer = document.querySelector('.image-view__container');
  btnImageViewClose = document.querySelector('.image-view__close-button');
  overlay = document.querySelector('.overlay');

  qualsChosen;
  transformConditions;

  qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  constructor() {
    // console.log(window.matchMedia('(hover: hover)').matches);
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.qualSectionObserver.observe(this.choiceBox);

    this.allQualsImages.forEach((img) => img.addEventListener('mousemove', this.tiltQualsImage.bind(this)));
    this.allQualsImages.forEach((img) => img.addEventListener('mouseout', this.returnTiltedImage.bind(this)));
    //prettier-ignore
    this.btnCloseQuals.addEventListener('click', function () {
        this.closeDisplayQualifications(this.qualsChosen);
        this.displayTowers();
        this.choiceBox.style.marginTop = '0';
    }.bind(this));

    this.detailsCloseBtn.addEventListener('click', this.displayDetails.bind(this));
    this.bothQuals.forEach((quals) => {
      quals.addEventListener('click', this.renderDisplayDetails.bind(this));
    });

    this.sectionDetails.addEventListener('click', this.showDetailsImage.bind(this));
    this.btnImageViewClose.addEventListener('click', this.hideDetailsImage.bind(this));
  }

  /////////////////////////// IMAGE TILTING IN QUALS //////////////////////////////

  returnTiltedImage(e) {
    const element = e.target.closest('.quals-box__image-container');
    element.style.transform = 'rotateX(0deg) rotateY(0deg) skew(15deg)';
    element.style.boxShadow = '0px 0px 10px var(--logo-image-shadow)';
  }

  tiltQualsImage(e) {
    const element = e.target.closest('.quals-box__image-container');
    const parameters = this.movingShadow(e, element, 14);
    element.style.transform = `rotateX(${parameters[1]}deg) rotateY(${-parameters[0]}deg) skew(15deg)`;
    element.style.boxShadow = `${parameters[0] / 2}px ${parameters[1] / 2}px 5px var(--logo-image-shadow)`;
  }

  /////////////////////////// IMAGES IN TOWERS RENDER //////////////////////////////

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
    //It adds listeners to towers
    setTimeout(
      function () {
        this.bothTowers.forEach((tower) => {
          tower.addEventListener('click', this.chooseTower.bind(this));
          if (window.matchMedia('(hover: hover)').matches) {
            tower.addEventListener('mouseover', this.imageStandOut.bind(this));
            tower.addEventListener('mouseout', this.returnImageTransformValues.bind(this));
          }
        });
      }.bind(this),
      1200
    );
  }

  imageStandOut(e) {
    if (!e.target.closest('.img-box')) return;
    const element = e.target.closest('.img-box');
    element.style.transform = `translateZ(10rem) translateY(${+element.dataset.pos / 2.3 - 0.5}rem) translateX(${
      element.dataset.pos / 1.5
    }rem) rotateZ(${element.dataset.pos * 2 - 5}deg)`;
    element.style.opacity = `1`;
  }

  returnImageTransformValues(e) {
    if (!e.target.closest('.img-box')) return;
    this.imageStyleRender(e.target.closest('.img-box'));
  }

  imageStyleRender(element) {
    element.style.transform = `translateZ(-${element.dataset.pos}rem) translateY(${
      +element.dataset.pos / 2.3
    }rem) translateX(${element.dataset.pos / 1.5}rem) rotateZ(${element.dataset.pos * 2}deg)`;
    element.style.opacity = `${1 - +`${element.dataset.pos >= 10 ? 9.5 : element.dataset.pos}` / 10 + 0.05}`;
  }

  //////////////// PAGE MECHANICS: CHOOSING DISPLAYING TOWERS/QUALS //////////////////

  chooseTower(e) {
    this.imageStyleRender(e.target.closest('.img-box'));
    if (e.target.closest('.tower-short')) {
      //note the chosen tower
      this.qualsChosen = 'short';
      //move the other tower away
      this.imgBoxesLong.forEach((box) => {
        box.style.transform = 'translateX(-65rem)';
      });
      //move the chosen tower to the center
      window.innerWidth <= 639
        ? (this.leftTower.style.transform = 'translateY(25vh)')
        : (this.leftTower.style.transform = 'translateY(22vh) translateX(-20vw)');
      //after 1200ms, make all the cards lose opacity one by one
      // prettier-ignore
      setTimeout(function () {this.imgBoxesShort.forEach((img) => {
            setTimeout(function () {img.style.opacity = 0;}.bind(this),img.dataset.pos * 50);});
        }.bind(this),1200);
    }
    if (e.target.closest('.tower-long')) {
      //note the chosen tower
      this.qualsChosen = 'long';
      //move the other tower away
      this.imgBoxesShort.forEach((box) => {
        box.style.transform = 'translateX(65rem)';
      });
      //move the chosen tower to the center
      window.innerWidth <= 639
        ? (this.rightTower.style.transform = 'translateY(-25vh)')
        : (this.rightTower.style.transform = 'translateY(-15vh) translateX(20vw)');
      //after 1200ms, make all the cards lose opacity one by one
      // prettier-ignore
      setTimeout(function () {this.imgBoxesLong.forEach((img) => {
        setTimeout(function () {img.style.opacity = 0;}.bind(this),img.dataset.pos * 50);});
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
    this.choiceBox.scrollIntoView({ block: 'start', behavior: 'smooth' });
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
      this._makeElementAppear(this.qualsShort, 300, 'flex');
      this._makeElementAppear(this.eduIT, 300, 'inline-block');
    }
    if (type === 'long') {
      this._makeElementAppear(this.qualsLong, 300, 'flex');
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

  //////////////////////// DETAILS WINDOW FUNCTIONS /////////////////////

  async renderDisplayDetails(e) {
    if (!e.target.closest('.quals-box')) return;
    const id = e.target.closest('.quals-box').id;
    console.log(id);
    await this.displayDetails(id);
    this.detailsText.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  async displayDetails(id) {
    try {
      if (this.sectionDetails.style.display === 'flex') {
        // Close details window
        this._makeElementDisappear(this.overlay, 300);
        this._makeElementDisappear(this.sectionDetails, 200);
        this.sectionDetails.style.transform = `translateY(3rem)`;
      } else {
        // Render Loading Spinner
        this._makeElementAppear(this.waitingOverlay, 0, 'block');
        this.waitingSpinner.style.display = 'block';
        // Open details window
        this._makeElementAppear(this.overlay, 300, 'block');
        this.sectionDetails.style.display = 'flex';
        setTimeout(
          function () {
            this.sectionDetails.style.opacity = 1;
            this.sectionDetails.style.transform = `translateY(0)`;
          }.bind(this),
          20
        );
        //Make server request
        let qualData;
        const res = await axios({
          method: 'GET',
          // url: 'http://127.0.0.1:8000/api/v1/users/login',
          url: `http://127.0.0.1:3000/details?id=${id}`,
        });
        if (res.data.message === 'success') {
          //Add data to page
          qualData = res.data.detailsData;
          this.detailsName.textContent = qualData.headline;
          this.detailsText.textContent = qualData.description;
          this.detailsImage.src = qualData.imagePath;
          //Hide Spinner
          this._makeElementDisappear(this.waitingOverlay, 300);
          // this.waitingOverlay.style.display = 'none';
          this.waitingSpinner.style.display = 'none';
        }
      }
    } catch (err) {
      this.waitingSpinner.style.display = 'none';
      this._makeElementAppear(this.errorMessageBox, 200, 'block');
      setTimeout(() => {
        this._makeElementDisappear(this.errorMessageBox, 200);
        this._makeElementDisappear(this.waitingOverlay, 300);
        this.displayDetails();
      }, 2000);
    }
  }

  showDetailsImage(e) {
    if (!e.target.closest('.details__image-box')) return;
    const imageBox = e.target.closest('.details__image-box');
    const imageSource = imageBox.getElementsByTagName('img')[0].src;
    document.querySelector('.image-view__image').src = imageSource;
    this._makeElementAppear(this.imageViewContainer, 50, 'block');
    // this.imageViewContainer.style.display = 'block';
  }

  hideDetailsImage() {
    this._makeElementDisappear(this.imageViewContainer, 200);
  }

  ////////////////////// MOVING SHADOW CODE ////////////////////////

  addIntroMovingShadow(e) {
    const shadowParameters = this.movingShadow(e, this.introBox, 15);
    this.introText.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 4px var(--icons-shadow))`;
    this.introIcon.style.filter = `drop-shadow(${shadowParameters[0]}px ${shadowParameters[1]}px 8px var(--icons-shadow))`;
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

export default QualificationsView;
