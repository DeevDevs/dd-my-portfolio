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

  mousePositionX;
  mouseSpeed = 1;
  lastMousePosition;
  shiftValue = 0;
  dragX = 0;
  movingStore;
  isMoving = true;
  dragDirection;
  currentDivsPosition = 0;

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

  observePrMainSection = new IntersectionObserver(this.bringFirstProject.bind(this), {
    root: null,
    threshold: [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
  });
  intersectionCount = 0;

  constructor() {
    this.observePrMainSection.observe(this.wheelContainer);
    window.addEventListener('resize', this.returnShiftedSection.bind(this));
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.draggedOverDiv.addEventListener('mousemove', this.showMousePosition.bind(this));
    this.draggedDiv.addEventListener('click', this.whereClicks.bind(this));
    this.draggedDiv.addEventListener('dragstart', this.startDrag.bind(this));
    this.draggedDiv.addEventListener('drag', this.seeDrag.bind(this));
    this.draggedDiv.addEventListener('dragend', this.endRotation.bind(this));
  }

  bringFirstProject(entry, observer) {
    if (!entry[0].isIntersecting) return;
    entry[0].target.classList.remove('section-hidden');
    if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches) {
      this.wheelGridBox.style.transform = `translateX(${75 - this.intersectionCount * (75 / 20)}vw)`;
      this.intersectionCount++;
      console.log(entry[0], entry[0].intersectionRatio);
      if (this.intersectionCount >= 20 || entry[0].intersectionRatio >= 0.97) {
        // this.wheelGridBox.style.transform = `translateX(0vw)`;
        this.setWheelFinalPosition();
        setTimeout(
          function () {
            this.wheelGridBox.style.transition = 'transform 0ms';
          }.bind(this),
          600
        );

        observer.unobserve(this.wheelContainer);
      }
    }
  }

  returnShiftedSection() {
    if (window.innerWidth <= 1080) {
      this.wheelGridBox.style.transform = `translateX(0vw)`;
    }
  }

  whereClicks() {
    // if (this.mousePositionX < window.innerWidth / 4) this.shiftProjects('left');
    if (this.mousePositionX > window.innerWidth / 4 && this.mousePositionX < (window.innerWidth * 3) / 4)
      console.log('center');
    // if (this.mousePositionX > (window.innerWidth * 3) / 4) this.shiftProjects('right');
  }

  shiftProjects(direction) {
    if (direction === 'right' && this.currentDivsPosition < 7) this.currentDivsPosition++;
    if (direction === 'left' && this.currentDivsPosition > 0) this.currentDivsPosition--;
    this.wheelGridBox.style.transform = `translateX(${this.currentDivsPosition * -50}vw)`;
  }

  ////////////////////// FRONT DIV ANIMATION FUNCTIONS ///////////////////////////

  identifyFrontDiv() {
    switch (this.shiftValue) {
      case 0:
        this.revealProjectDetails('1-mapty');
        break;
      case -50:
        this.revealProjectDetails('2-bankist');
        break;
      case -100:
        this.revealProjectDetails('3-bankapp');
        break;
      case -150:
        this.revealProjectDetails('4-natours');
        break;
      case -200:
        this.revealProjectDetails('5-forkify');
        break;
      case -250:
        this.revealProjectDetails('6-connect');
        break;
      case -300:
        this.revealProjectDetails('7-piggame');
        break;
      case -350:
        this.revealProjectDetails('8-portfolio');
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
    mainContainer.style.transform = 'scale(1.02)';
    mainContainer.style.opacity = 1;
    const secondaryContainers = frontDiv
      .querySelector('.justadiv__content')
      .querySelectorAll('.jad__content-secondary-img__container');
    secondaryContainers.forEach((container) => {
      container.style.opacity = 1;
      container.style.transform = 'scale(1.1)';
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
      this.shiftValue = this.shiftValue + 0.1 * this.mouseSpeed;
      this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
      this.dragX = e.clientX;
      if (e.y !== 0) this.dragDirection = 'right';
    }
    if (e.clientX < this.dragX && e.y !== 0) {
      this.shiftValue = this.shiftValue - 0.1 * this.mouseSpeed;
      this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
      this.dragX = e.clientX;
      this.dragDirection = 'left';
    }
  }

  endRotation() {
    const remaining = Math.abs(this.shiftValue % 50);
    if (this.isMoving) {
      const distanceLeft = 50 - remaining;
      if (this.dragDirection === 'right') this.slowRotation(this.dragDirection, remaining);
      if (this.dragDirection === 'left') this.slowRotation(this.dragDirection, distanceLeft);
    }
    if (!this.isMoving) {
      remaining > 25 ? (this.shiftValue -= 50 - remaining) : (this.shiftValue += remaining);
      this.setWheelFinalPosition();
    }
  }

  slowRotation(direction, value) {
    if (direction === 'right') {
      this.shiftValue += value;
      this.setWheelFinalPosition();
    }
    if (direction === 'left') {
      this.shiftValue -= value;
      this.setWheelFinalPosition();
    }
  }

  setWheelFinalPosition() {
    if (this.shiftValue > 0) this.shiftValue = 0;
    if (this.shiftValue < -350) this.shiftValue = -350;
    this.wheelGridBox.style.transition = `transform 0.8s cubic-bezier(0.24, 1.44, 0.44, 1.19)`;
    this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
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
