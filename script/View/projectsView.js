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
  rotationValue = 0;
  dragX = 0;
  movingStore;
  isMoving = true;
  dragDirection;

  // qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  constructor() {
    this.positionDivs();
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    // window.addEventListener('keydown', this.initiateSpin.bind(this));
    this.draggedOverDiv.addEventListener('mousemove', this.showMousePosition.bind(this));
    this.draggedDiv.addEventListener('click', this.whereClicks.bind(this));
    this.draggedDiv.addEventListener('dragstart', this.setGrabbingCursor.bind(this));
    this.draggedDiv.addEventListener('drag', this.seeDrag.bind(this));
    this.draggedDiv.addEventListener('dragend', this.endRotation.bind(this));
  }

  whereClicks() {
    if (this.mousePositionX < window.innerWidth / 3) console.log('left');
    if (this.mousePositionX > window.innerWidth / 3 && this.mousePositionX < (window.innerWidth * 2) / 3)
      if (this.mousePositionX > (window.innerWidth * 2) / 3) console.log('right');
  }

  ///////////// WHEEL FUNCTIONS //////////////////
  // initiateSpin(e) {
  //   if (e.key !== 'ArrowRight') {
  //     if (e.key !== 'ArrowLeft') return;
  //   }
  //   if (e.key === 'ArrowRight') {
  //     this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
  //     this.rotationValue++;
  //   }
  //   if (e.key === 'ArrowLeft') {
  //     this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
  //     this.rotationValue--;
  //   }
  // }

  setGrabbingCursor(e) {
    Draggable.create(this.draggedDiv, {
      throwProps: true,
      bounds: window,
      edgeResistance: 0.7,
      cursor: 'grab' /* set initial cursor on hover */,
      onDragStart: function () {
        TweenLite.set(this.draggedDiv, { cursor: 'grabbing' });
      },
      onDragEnd: function () {
        TweenLite.set(this.draggedDiv, { cursor: 'grab' });
      },
    });
  }

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

  seeDrag(e) {
    this.checkIfMoves(e.clientX, e.clientY);
    // console.log(e);
    // this.draggedDiv.style.cursor = 'grabbing';
    // this.draggedOverDiv.style.cursor = 'grabbing';
    if (e.clientX > this.dragX) {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue += 0.3;
      this.dragX = e.clientX;
      if (e.y !== 0) this.dragDirection = 'right';
    }
    if (e.clientX < this.dragX && e.y !== 0) {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue -= 0.3;
      this.dragX = e.clientX;
      this.dragDirection = 'left';
    }
  }

  endRotation(e) {
    const remaining = Math.abs(this.rotationValue % 45);
    if (this.isMoving) {
      if (this.dragDirection === 'right') {
        let value = this.rotationValue > 0 ? 1 + (45 - remaining) / 45 : 1 + remaining / 45;
        this.slowRotation('right', value);
      }
      if (this.dragDirection === 'left') {
        let value = this.rotationValue > 0 ? 1 + remaining / 45 : 1 + (45 - remaining) / 45;
        this.slowRotation('left', value);
      }
    }
    if (!this.isMoving) {
      if (remaining >= 22.5) {
        let value = (45 - remaining) / 45;
        this.rotationValue > 0 ? this.slowRotation('right', value) : this.slowRotation('left', value);
      }
      if (remaining < 22.5) {
        let value = remaining / 45;
        this.rotationValue > 0 ? this.slowRotation('left', value) : this.slowRotation('right', value);
      }
    }
  }

  slowRotation(direction, value) {
    if (direction === 'right') {
      for (let i = 0; i <= 45; i++) {
        setTimeout(
          function () {
            this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
            this.rotationValue += value;
          }.bind(this),
          i * 15
        );
      }
    }
    if (direction === 'left') {
      for (let i = 0; i <= 45; i++) {
        setTimeout(
          function () {
            this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
            this.rotationValue -= value;
          }.bind(this),
          i * 15
        );
      }
    }
  }

  positionDivs() {
    this.justDivs.forEach((div) => {
      div.style.transform = `rotateY(${div.dataset.place}deg) translateZ(${window.innerWidth / 2.5}px)`;
    });
  }

  /////////////////////////// IMAGE TILTING IN QUALS //////////////////////////////

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
