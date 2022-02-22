class ProjectsView {
  introBox = document.querySelector('.intro-part');
  introText = document.querySelector('.intro-part__text');
  introIcon = document.querySelector('.intro-part__icon');
  justDivs = document.querySelectorAll('.justadiv');
  wheel = document.querySelector('.pr-general-view');
  wheelContainer = document.querySelector('.pr-main-section');
  draggedOverDiv = document.querySelector('.draggedover-div');
  draggedDiv = document.querySelector('.dragged-div');
  log;
  rotationValue = 0;
  dragX = 0;
  dragDirection;

  // qualSectionObserver = new IntersectionObserver(this.cardLikeImages.bind(this), { root: null, threshold: 0.1 });

  constructor() {
    this.positionDivs();
    this.introBox.addEventListener('mousemove', this.addIntroMovingShadow.bind(this));
    //   this.qualSectionObserver.observe(this.choiceBox);
    window.addEventListener('keydown', this.initiateSpin.bind(this));
    this.draggedOverDiv.addEventListener('mousemove', this.showMousePosition.bind(this));
    this.draggedDiv.addEventListener('drag', this.seeDrag.bind(this));
    this.draggedDiv.addEventListener('dragend', this.slowDrag.bind(this));
    // this.draggedDiv.onscroll = (e) => console.log(e);
    console.log(this.draggedDiv.getBoundingClientRect());
  }

  ///////////// TESTING //////////////////
  initiateSpin(e) {
    if (e.key !== 'ArrowRight') {
      if (e.key !== 'ArrowLeft') return;
    }
    if (e.key === 'ArrowRight') {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue++;
    }
    if (e.key === 'ArrowLeft') {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue--;
    }
    console.log(this.rotationValue);
  }

  showMousePosition(e) {
    this.draggedDiv.style.left = `${e.pageX - 20}px`;
    this.draggedDiv.style.top = `${e.pageY - 20}px`;
  }

  seeDrag(e) {
    console.log(e);
    if (e.clientX > this.dragX) {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue += 0.35;
      this.dragX = e.clientX;
      if (e.y !== 0) this.dragDirection = 'right';
    }
    if (e.clientX < this.dragX && e.y !== 0) {
      this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
      this.rotationValue -= 0.35;
      this.dragX = e.clientX;
      this.dragDirection = 'left';
    }
    console.log(this.dragDirection);
  }

  // continueRotation(direction) {
  //   if (direction === 'right') {
  //     for (let i = 0; i < 10; i++) {
  //       setTimeout(function(){}, i*10)
  //     }
  //   }
  // }

  slowDrag(e) {
    if (this.dragDirection === 'right') {
      for (let i = 0; i < 15; i++) {
        setTimeout(
          function () {
            this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
            this.rotationValue += 1.5;
          }.bind(this),
          i * 30
        );
      }
    }
    if (this.dragDirection === 'left') {
      for (let i = 0; i < 15; i++) {
        setTimeout(
          function () {
            this.wheel.style.transform = `rotateY(${this.rotationValue}deg)`;
            this.rotationValue -= 1.5;
          }.bind(this),
          i * 30
        );
      }
    }
  }

  positionDivs() {
    this.justDivs.forEach((div) => {
      // console.log(window.innerWidth);
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
