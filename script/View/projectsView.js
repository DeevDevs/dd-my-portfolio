class ProjectsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text');
  introIcon = document.querySelector('.intro-part__icon');
  justDivs = document.querySelectorAll('.justadiv');
  wheel = document.querySelector('.pr-general-view');
  wheelContainer = document.querySelector('.pr-main-section');
  draggedOverDiv = document.querySelector('.draggedover-div');
  draggedDiv = document.querySelector('.dragged-div');

  mousePositionX;
  mouseSpeed = 1;
  lastMousePosition;
  rotationValue = 0;
  dragX = 0;
  movingStore;
  isMoving = true;
  dragDirection;
  newGrab = false;
  // timer;

  // qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  constructor() {
    this.positionDivs();
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    this.draggedOverDiv.addEventListener('mousemove', this.showMousePosition.bind(this));
    this.draggedDiv.addEventListener('click', this.whereClicks.bind(this));
    this.draggedDiv.addEventListener('dragstart', this.startDrag.bind(this));
    this.draggedDiv.addEventListener('drag', this.seeDrag.bind(this));
    this.draggedDiv.addEventListener('dragend', this.endRotation.bind(this));
  }

  whereClicks() {
    if (this.mousePositionX < window.innerWidth / 3) console.log('left');
    if (this.mousePositionX > window.innerWidth / 3 && this.mousePositionX < (window.innerWidth * 2) / 3)
      console.log('center');
    if (this.mousePositionX > (window.innerWidth * 2) / 3) console.log('right');
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
  }

  seeDrag(e) {
    this.wheel.style.transition = `transform 0s`;
    this.checkIfMoves(e.clientX, e.clientY);
    if (!isNaN(Math.abs(this.lastMousePosition - e.clientX)) && Math.abs(this.lastMousePosition - e.clientX) !== 0)
      this.mouseSpeed = Math.abs(this.lastMousePosition - e.clientX);
    if (e.clientY !== 0) this.lastMousePosition = e.clientX;
    if (e.clientX > this.dragX) {
      // this.rotationValue += 0.4;
      this.rotationValue = this.rotationValue + 0.2 * this.mouseSpeed;
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.dragX = e.clientX;
      if (e.y !== 0) this.dragDirection = 'right';
    }
    if (e.clientX < this.dragX && e.y !== 0) {
      // this.rotationValue -= 0.4;
      this.rotationValue = this.rotationValue - 0.2 * this.mouseSpeed;
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.dragX = e.clientX;
      this.dragDirection = 'left';
    }
  }

  endRotation(e) {
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
    this.wheel.style.transition = `transform 0.6s cubic-bezier(0.24, 1.44, 0.44, 1.19)`;
    this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
    this.timer = setTimeout(
      function () {
        this.wheel.style.transition = `transform 0s`;
        this.identifyFrontDiv();
      }.bind(this),
      600
    );
  }

  identifyFrontDiv() {
    switch (Math.abs(this.rotationValue % 360)) {
      case 0:
        console.log('div1');
        break;
      case 45:
        this.rotationValue > 0 ? console.log('div8') : console.log('div2');
        break;
      case 90:
        this.rotationValue > 0 ? console.log('div7') : console.log('div3');
        break;
      case 135:
        this.rotationValue > 0 ? console.log('div6') : console.log('div4');
        break;
      case 180:
        console.log('back');
        break;
      case 225:
        this.rotationValue > 0 ? console.log('div4') : console.log('div6');
        break;
      case 270:
        this.rotationValue > 0 ? console.log('div3') : console.log('div7');
        break;
      case 315:
        this.rotationValue > 0 ? console.log('div2') : console.log('div8');
        break;
      default:
        console.log('no div found');
        break;
    }
  }

  //////////////////// POSITION DIVS AT PAGELOAD ///////////////////

  positionDivs() {
    if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches)
      this.justDivs.forEach((div) => {
        div.style.transform = `rotateY(${div.dataset.place}deg) translateZ(${window.innerWidth / 50}rem)`;
      });
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
