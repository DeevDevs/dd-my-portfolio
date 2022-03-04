class ProjectsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text');
  introIcon = document.querySelector('.intro-part__icon');
  wheelGridBox = document.querySelector('.pr-general-view');
  wheelContainer = document.querySelector('.pr-main-section');
  mainProjectName = document.querySelector('.pr-main__project-name');
  wheelDetails = document.querySelectorAll('.pr-wheel-details');
  individualProjectName = document.querySelectorAll('.justadiv__project-name');
  justDivs = document.querySelectorAll('.justadiv');
  justDivsContentBoxes = document.querySelectorAll('.justadiv__content');
  mainImageContainers = document.querySelectorAll('.jad__content-main-img__container');
  secondaryImageContainers = document.querySelectorAll('.jad__content-secondary-img__container');
  draggedOverDiv = document.querySelector('.draggedover-div');
  draggedDiv = document.querySelector('.dragged-div');
  btnSwitchFormat = document.querySelector('.btn__switch-format');
  projectViewFormat = 'wheel';
  currentPageCondition;
  mousePositionX;
  mouseSpeed = 1;
  lastMousePosition;
  rotationValue = 0;
  dragX = 0;
  movingStore;
  isMoving = true;
  dragDirection;
  newGrab = false;
  projectNames = [
    'Mapty: Workout Records',
    'Bankist: Home Page',
    'Bankist: Application',
    'Natours: Your Travelling Guide',
    'Forkify: Enrich Your Kitchen Arsenal',
    'Connect Four',
    'Pig Game',
    'Portfolio Website',
  ];
  windowWidth = window.innerWidth;

  // qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  constructor() {
    window.addEventListener('resize', this.followResizing.bind(this));
    this.btnSwitchFormat.addEventListener(
      'click',
      function () {
        this.toggleProjectViewFormat(this.projectViewFormat);
      }.bind(this)
    );
    if (window.innerWidth >= 1200 && window.innerWidth <= 2400) {
      this.positionDivs();
    } else this.toggleProjectViewFormat();
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.draggedOverDiv.addEventListener('mousemove', this.showMousePosition.bind(this));
    this.draggedDiv.addEventListener('click', this.whereClicks.bind(this));
    this.draggedDiv.addEventListener('dragstart', this.startDrag.bind(this));
    this.draggedDiv.addEventListener('drag', this.seeDrag.bind(this));
    this.draggedDiv.addEventListener('dragend', this.endRotation.bind(this));
  }

  followResizing(e) {
    console.log(e);
    // if (this.projectViewFormat === 'wheel') {
    //   this.positionDivs();
    // }
    if (e.target.innerWidth >= 1080) {
      this.btnSwitchFormat.style.display = 'block';
    }
    if (
      (e.target.innerWidth <= 1080 && this.projectViewFormat === 'wheel') ||
      (e.target.innerWidth >= 2080 && this.projectViewFormat === 'wheel')
    ) {
      this.toggleProjectViewFormat();
      this.btnSwitchFormat.style.display = 'none';
    }
  }

  toggleProjectViewFormat() {
    // this.windowWidth = window.innerWidth;
    if (this.projectViewFormat === 'wheel') {
      this.wheelGridBox.classList.add('nowheel');
      this.wheelGridBox.style.transform = 'rotateY(0deg)';
      this.justDivs.forEach((div, i) => {
        div.style.transform = `rotateY(0deg) translateZ(0rem)`;
        div.classList.add('nowheel__divs');
        div.style.position = 'relative';
      });
      this.justDivsContentBoxes.forEach((div) => {
        div.classList.add('nowheel__divs-content');
      });
      this.mainImageContainers.forEach((container) => container.classList.add('nowheel__main-img-container'));
      this.secondaryImageContainers.forEach((container) => container.classList.add('nowheel__secondary-img-container'));
      this.individualProjectName.forEach((nameBox) => (nameBox.style.display = 'block'));
      this.mainProjectName.style.display = 'none';
      this.draggedDiv.style.display = 'none';
      this.draggedOverDiv.style.display = 'none';
      this.projectViewFormat = 'flex';
    } else if (this.projectViewFormat === 'flex') {
      this.wheelGridBox.classList.remove('nowheel');
      this.wheelGridBox.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.justDivs.forEach((div) => {
        div.classList.remove('nowheel__divs');
        div.style.position = 'absolute';
        div.style.transform = `rotateY(${div.dataset.place}deg) translateZ(${window.innerWidth / 40}rem)`;
      });
      this.justDivsContentBoxes.forEach((div) => {
        div.classList.remove('nowheel__divs-content');
      });
      this.mainImageContainers.forEach((container) => container.classList.remove('nowheel__main-img-container'));
      this.secondaryImageContainers.forEach((container) =>
        container.classList.remove('nowheel__secondary-img-container')
      );
      this.individualProjectName.forEach((nameBox) => (nameBox.style.display = 'none'));
      this.mainProjectName.style.display = 'block';
      this.draggedDiv.style.display = 'block';
      this.draggedOverDiv.style.display = 'flex';
      this.projectViewFormat = 'wheel';
      // this.positionDivs();
    }
  }

  whereClicks() {
    if (this.mousePositionX < window.innerWidth / 4) console.log('left');
    if (this.mousePositionX > window.innerWidth / 4 && this.mousePositionX < (window.innerWidth * 3) / 4)
      console.log('center');
    if (this.mousePositionX > (window.innerWidth * 3) / 4) console.log('right');
  }

  ////////////////////// FRONT DIV ANIMATION FUNCTIONS ///////////////////////////

  identifyFrontDiv() {
    switch (Math.abs(this.rotationValue % 360)) {
      case 0:
        this.revealProjectDetails('1-mapty');
        break;
      case 45:
        this.rotationValue > 0 ? this.revealProjectDetails('8-portfolio') : this.revealProjectDetails('2-bankist');
        break;
      case 90:
        this.rotationValue > 0 ? this.revealProjectDetails('7-piggame') : this.revealProjectDetails('3-bankapp');
        break;
      case 135:
        this.rotationValue > 0 ? this.revealProjectDetails('6-connect') : this.revealProjectDetails('4-natours');
        break;
      case 180:
        this.revealProjectDetails('5-forkify');
        break;
      case 225:
        this.rotationValue > 0 ? this.revealProjectDetails('4-natours') : this.revealProjectDetails('6-connect');
        break;
      case 270:
        this.rotationValue > 0 ? this.revealProjectDetails('3-bankapp') : this.revealProjectDetails('7-piggame');
        break;
      case 315:
        this.rotationValue > 0 ? this.revealProjectDetails('2-bankist') : this.revealProjectDetails('8-portfolio');
        break;
      default:
        break;
    }
  }

  revealProjectDetails(projectId) {
    const frontDiv = document.getElementById(projectId);
    const mainContainer = frontDiv
      .querySelector('.justadiv__content')
      .querySelector('.jad__content-main-img__container');
    // const mainImage = frontDiv
    //   .querySelector('.justadiv__content')
    //   .querySelector('.jad__content-main-img__container')
    //   .querySelector('.jad__content-main-img');
    // mainContainer.style.transform = ' scale(1.02) translateZ(0.5rem)';
    mainContainer.style.transform = 'scale(1.02)';
    mainContainer.style.opacity = 1;
    // mainImage.style.display = 'block';
    const secondaryContainers = frontDiv
      .querySelector('.justadiv__content')
      .querySelectorAll('.jad__content-secondary-img__container');
    secondaryContainers.forEach((container) => {
      container.style.opacity = 1;
      container.style.transform = 'scale(1.1)';
      // container.style.transform = ' scale(1.1)';
      container.style.backfaceVisibility = 'hidden';
    });
    this.displayFrontProjectName(projectId);
    this.displayFrontProjectDetails(projectId);
    this.wheelContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  displayFrontProjectName(projectId) {
    const idNum = parseInt(projectId);
    this.mainProjectName.textContent = this.projectNames[idNum - 1];
  }

  displayFrontProjectDetails(projectId) {
    const idNum = parseInt(projectId);
    this.wheelDetails.forEach((element) => {
      element.style.opacity = 1;
    });
  }

  //////////////////// POSITION DIVS AT PAGELOAD ///////////////////

  positionDivs() {
    // if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches)
    //   this.justDivs.forEach((div) => {
    //     div.style.transform = `rotateY(${div.dataset.place}deg) translateZ(${window.innerWidth / 40}rem)`;
    //   });
    if (window.matchMedia('(hover: hover)').matches)
      this.justDivs.forEach((div) => {
        div.style.transform = `rotateY(${div.dataset.place}deg) translateZ(${window.innerWidth / 40}rem)`;
      });
  }

  ///////////// WHEEL FUNCTIONS //////////////////

  showMousePosition(e) {
    this.mousePositionX = e.pageX;
    this.draggedDiv.style.left = `${e.pageX - 10}px`;
    this.draggedDiv.style.top = `${e.pageY - 10}px`;
  }

  checkIfMoves(curMoveX, curMoveY) {
    if (curMoveX === 0 && curMoveY === 0) return;
    if (curMoveX !== this.movingStore) {
      this.isMoving = true;
    } else {
      this.isMoving = false;
    }
    if (curMoveX !== 0) this.movingStore = curMoveX;
  }

  startDrag(e) {
    this.mouseSpeed = e.clientX;
    this.lastMousePosition = e.clientX;
    this.wheelDetails.forEach((element) => {
      element.style.opacity = 0;
    });
  }

  seeDrag(e) {
    this.wheelGridBox.style.transition = `transform 0s`;
    this.checkIfMoves(e.clientX, e.clientY);
    if (!isNaN(Math.abs(this.lastMousePosition - e.clientX)) && Math.abs(this.lastMousePosition - e.clientX) !== 0)
      this.mouseSpeed = Math.abs(this.lastMousePosition - e.clientX);
    if (e.clientY !== 0) this.lastMousePosition = e.clientX;
    if (e.clientX > this.dragX) {
      // this.rotationValue += 0.4;
      this.rotationValue = this.rotationValue + 0.2 * this.mouseSpeed;
      this.wheelGridBox.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.dragX = e.clientX;
      if (e.y !== 0) this.dragDirection = 'right';
    }
    if (e.clientX < this.dragX && e.y !== 0) {
      // this.rotationValue -= 0.4;
      this.rotationValue = this.rotationValue - 0.2 * this.mouseSpeed;
      this.wheelGridBox.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.dragX = e.clientX;
      this.dragDirection = 'left';
    }
  }

  endRotation() {
    const remaining = Math.abs(this.rotationValue % 45);
    if (this.isMoving) {
      const distanceLeft = 45 - remaining;
      if (this.rotationValue > 0) {
        this.dragDirection === 'right'
          ? this.slowRotation(this.dragDirection, distanceLeft)
          : this.slowRotation(this.dragDirection, remaining);
      }
      if (this.rotationValue < 0) {
        this.dragDirection === 'right'
          ? this.slowRotation(this.dragDirection, remaining)
          : this.slowRotation(this.dragDirection, distanceLeft);
      }
    }
    if (!this.isMoving) {
      if (this.rotationValue > 0) {
        remaining > 22.5 ? (this.rotationValue += 45 - remaining) : (this.rotationValue -= remaining);
        this.setWheelFinalPosition();
      }
      if (this.rotationValue < 0) {
        remaining > 22.5 ? (this.rotationValue -= 45 - remaining) : (this.rotationValue += remaining);
        this.setWheelFinalPosition();
      }
    }
  }

  slowRotation(direction, value) {
    if (direction === 'right') {
      this.rotationValue += value;
      this.setWheelFinalPosition();
    }
    if (direction === 'left') {
      this.rotationValue -= value;
      this.setWheelFinalPosition();
    }
  }

  setWheelFinalPosition() {
    this.wheelGridBox.style.transition = `transform 0.6s cubic-bezier(0.24, 1.44, 0.44, 1.19)`;
    this.wheelGridBox.style.transform = `rotateY(${this.rotationValue}deg)`;
    this.timer = setTimeout(
      function () {
        this.wheelGridBox.style.transition = `transform 0s`;
        this.identifyFrontDiv();
      }.bind(this),
      600
    );
  }

  /////////////////////////// appear/disappear functions (just in case) //////////////////////////////

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

export default new ProjectsView();
