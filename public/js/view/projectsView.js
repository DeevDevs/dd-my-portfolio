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
  draggedOverDivSupreme = document.querySelector('.supreme-div');
  btnSwitchFormat = document.querySelector('.btn__switch-format');
  btnSwitchLanguage = document.querySelector('.switch-language__btn');
  projectViewFormat = 'wheel';

  mousePositionX;
  isMoving = true;
  isDragging = false;
  movingTimer;
  timerAfterMouseRelease;

  shiftValue = 0;
  dragDirection;

  projectNames = [
    [
      'Mapty: Workout Records',
      'Bankist: Home Page',
      'Bankist: Application',
      'Natours: Your Travelling Guide',
      'Forkify: Enrich Your Kitchen Arsenal',
      'Connect Four',
      'Pig Game',
      'Portfolio Website',
    ],
    [
      'Mapty: Дневник Спорсмена',
      'Bankist: Главная Страница',
      'Bankist: Приложение',
      'Natours: Ваш Туристический Гид',
      'Forkify: Арсенал Кулинара',
      'Cобери 4',
      'Игра в Порося',
      'Мое Портфолио',
    ],
  ];

  projectDetails = [[], [], [], [], [], [], [], []];

  currentProject;

  projectLinks = [
    'mapty',
    'bankist-page',
    'bankist-app',
    'natours-app',
    'forkify-app',
    'connect-four',
    'pig-game',
    'my-portfolio',
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
    this.draggedOverDivSupreme.addEventListener('mouseup', this.whereClicks.bind(this));
    this.draggingProjects();
  }

  //this function is used to return the projects div to the page when mode is shifter from desktop to mobile
  returnShiftedSection() {
    if (window.innerWidth <= 1080) {
      this.wheelGridBox.style.transform = `translateX(0vw)`;
    }
  }

  //it brings first project preview to the center of the page and reveals details
  async bringFirstProject(entry, observer) {
    if (!entry[0].isIntersecting) return;
    entry[0].target.classList.remove('section-hidden');
    if (window.innerWidth >= 1080 && window.matchMedia('(hover: hover)').matches) {
      this.wheelGridBox.style.transform = `translateX(${75 - this.intersectionCount * (75 / 20)}vw)`;
      this.intersectionCount++;
      if (this.intersectionCount >= 20 || entry[0].intersectionRatio >= 0.97) {
        await this.setWheelFinalPosition();
        //prettier-ignore
        setTimeout(function () {this.wheelGridBox.style.transition = 'transform 0ms';}.bind(this),600);
        observer.unobserve(this.wheelContainer);
      }
    }
  }

  // it allows dragging the block
  draggingProjects() {
    let pos1 = 0,
      pos2 = 0;
    this.draggedOverDivSupreme.onmousedown = dragWhileMouseDown.bind(this);

    async function dragWhileMouseDown(e) {
      this.isDragging = false;
      e = e || window.event;
      e.preventDefault();
      pos2 = e.clientX;
      this.wheelGridBox.style.transition = `transform 0.05s`;
      this.draggedOverDivSupreme.style.cursor = 'grabbing';
      document.onmouseup = closeProjectsDrag.bind(this);
      document.onmousemove = projectsDrag.bind(this);
    }

    function projectsDrag(e) {
      e = e || window.event;
      e.preventDefault();
      this.wheelDetails.forEach((element) => {
        element.style.opacity = 0;
      });

      clearTimeout(this.timerAfterMouseRelease);
      this.isDragging = true;
      this.shiftValue = Number(
        this.wheelGridBox.style.transform.slice(11, this.wheelGridBox.style.transform.length - 3)
      );
      this.isCursorMoving(e);

      pos1 = pos2 - e.clientX;
      pos2 = e.clientX;

      if (pos1 < 0) {
        this.shiftValue = this.shiftValue + 0.1 * Math.abs(pos1);
        this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
        this.dragDirection = 'right';
      }
      if (pos1 > 0) {
        this.shiftValue = this.shiftValue - 0.1 * Math.abs(pos1);
        this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
        this.dragDirection = 'left';
      }
    }

    async function closeProjectsDrag() {
      // stop moving when mouse button is released
      document.onmouseup = null;
      document.onmousemove = null;
      this.draggedOverDivSupreme.style.cursor = 'grab';
      if (!this.isDragging) return;
      this.wheelGridBox.style.transition = `transform 0.8s cubic-bezier(0.24, 1.44, 0.44, 1.19)`;
      //place the project in the center of the window
      if (this.dragDirection === 'left' && this.shiftValue > -350 && this.shiftValue < 0 && this.isMoving)
        this.shiftValue = this.shiftValue - (50 - Math.abs(this.shiftValue % 50));
      if (this.dragDirection === 'right' && this.shiftValue > -350 && this.shiftValue < 0 && this.isMoving)
        this.shiftValue = this.shiftValue + Math.abs(this.shiftValue % 50);
      //in case cursor didn't move on the moment of release, then the nearest project is shown
      if (!this.isMoving && this.shiftValue > -350 && this.shiftValue < 0)
        Math.abs(this.shiftValue % 50) > 25
          ? (this.shiftValue = this.shiftValue - (50 - Math.abs(this.shiftValue % 50)))
          : (this.shiftValue = this.shiftValue + Math.abs(this.shiftValue % 50));
      await this.setWheelFinalPosition();
    }
  }

  //this function places the closest project (as per the mechanics) to the center of the page
  async setWheelFinalPosition() {
    if (this.shiftValue > 0) this.shiftValue = 0;
    if (this.shiftValue < -350) this.shiftValue = -350;
    this.wheelGridBox.style.transition = `transform 0.8s cubic-bezier(0.24, 1.44, 0.44, 1.19)`;
    this.wheelGridBox.style.transform = `translateX(${this.shiftValue}vw)`;
    this.timerAfterMouseRelease = setTimeout(
      async function () {
        this.wheelGridBox.style.transition = `transform 0.05s`;
        await this.identifyFrontDiv();
      }.bind(this),
      600
    );
  }

  //this function identifies where clicking is happening over the manipulation field
  whereClicks(e) {
    if (this.isDragging) return;
    if (e.clientX > window.innerWidth / 4 && e.clientX < (window.innerWidth * 3) / 4)
      window.open(`/projects/${this.projectLinks[this.currentProject - 1]}`, '_self');
  }

  ////////////////////// FRONT DIV ANIMATION FUNCTIONS ///////////////////////////

  //it identifies if the mouse was moving on the moment of mouse button release
  isCursorMoving(e) {
    clearTimeout(this.movingTimer);
    this.mousePositionX !== e.clientX ? (this.isMoving = true) : (this.isMoving = false);
    this.mousePositionX = e.clientX;
    //prettier-ignore
    this.movingTimer = setTimeout(function () {this.isMoving = false}.bind(this), 125);
  }

  //it identifies the front project
  async identifyFrontDiv() {
    switch (this.shiftValue) {
      case 0:
        this.currentProject = 1;
        await this.revealProjectDetails('1-mapty');
        break;
      case -50:
        this.currentProject = 2;
        await this.revealProjectDetails('2-bankist');
        break;
      case -100:
        this.currentProject = 3;
        await this.revealProjectDetails('3-bankapp');
        break;
      case -150:
        this.currentProject = 4;
        await this.revealProjectDetails('4-natours');
        break;
      case -200:
        this.currentProject = 5;
        await this.revealProjectDetails('5-forkify');
        break;
      case -250:
        this.currentProject = 6;
        await this.revealProjectDetails('6-connect');
        break;
      case -300:
        this.currentProject = 7;
        await this.revealProjectDetails('7-piggame');
        break;
      case -350:
        this.currentProject = 8;
        await this.revealProjectDetails('8-portfolio');
        break;
      default:
        break;
    }
  }

  //it reveals the name of the front project and animates the front project
  async revealProjectDetails(projectId) {
    const frontDiv = document.getElementById(projectId);
    const mainContainer = frontDiv
      .querySelector('.justadiv__content')
      .querySelector('.jad__content-main-img__container');
    // mainContainer.style.transform = 'scale(1.02)';
    mainContainer.style.opacity = 1;
    const secondaryContainers = frontDiv
      .querySelector('.justadiv__content')
      .querySelectorAll('.jad__content-secondary-img__container');
    secondaryContainers.forEach((container) => {
      container.style.opacity = 1;
      // container.style.transform = 'scale(1.1)';
    });
    this.displayFrontProjectName(projectId);
    await this.displayFrontProjectDetails(projectId);
  }

  //function to identify and reveal project name
  displayFrontProjectName(projectId) {
    const idNum = parseInt(projectId);
    this.btnSwitchLanguage.textContent === 'en'
      ? (this.mainProjectName.textContent = this.projectNames[0][idNum - 1])
      : (this.mainProjectName.textContent = this.projectNames[1][idNum - 1]);
  }

  //funtion to identify (and SOON REVEAL) project details
  async displayFrontProjectDetails(projectId) {
    try {
      let projectData;
      const idNum = parseInt(projectId);
      if (this.projectDetails[idNum - 1].length === 0) {
        //request project details
        const res = await axios({
          method: 'GET',
          // url: `http://127.0.0.1:3000/details?prnumber=${idNum}`,
          url: `/details?prnumber=${idNum}`,
        });
        if (res.data.message === 'success') {
          //render project details
          projectData = [res.data.detailsData.detailsLeft, res.data.detailsData.detailsRight];
          this.projectDetails[idNum - 1] = projectData;
        }
      } else projectData = this.projectDetails[idNum - 1];
      // console.log(this.projectDetails);
      this.wheelDetails.forEach((element, i) => {
        element.firstChild.textContent = projectData[i];
        element.style.opacity = 1;
      });
    } catch (err) {
      this.wheelDetails.forEach((element, i) => {
        element.firstChild.textContent =
          'Oops... Something went wrong. Information about this project is not accessible at the moment. Please, try again later.';
        element.style.opacity = 1;
      });
    }
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
}

export default ProjectsView;
