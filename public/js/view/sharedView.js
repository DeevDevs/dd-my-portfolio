import ThemeSwitcher from './nightView.js';

class SharedView {
  header = document.querySelector('.header-menu');
  menuBtn = document.querySelector('.side-menu__btn');
  themeBtn = document.querySelector('.theme-container__btn');
  sideMenu = document.querySelector('.side-menu');
  overlay = document.querySelector('.overlay');
  topMenuLogo = document.querySelector('.logo-container');
  switched = true;
  footerMenu = document.querySelector('.footer-menu');
  footerBtns = document.querySelector('.footer-menu__buttons');
  footerExtraDiv = document.querySelector('.footer-menu__extra');
  footerSubmitBtn = document.querySelector('.footer-menu__form-submit');
  footerWindow = 'contacts';
  switchLangBtn = document.querySelector('.switch-language__btn');
  switchLangBtnSide = document.querySelector('.switch-language__btn--side');
  errorWindow = document.querySelector('.error-window');
  errorWindowMessage = document.querySelector('.error-message');

  //running code-related variables
  runningCodeDiv = document.querySelector('.intro-part__running-code-box');
  fallingDiv = document.querySelector('.falling-down-div');
  runningDiv = document.querySelector('.running-right-div');
  fallingDivTranslateValue = 2.25;

  theViewedPage = document.getElementById('this-page').textContent;

  footerMenuObserver = new IntersectionObserver(this.hideExtraFooterBox.bind(this), { root: null, threshold: 0 });

  constructor() {
    this.switchLangBtn.addEventListener('click', this.addHandlerChangeLanguage.bind(this));
    this.switchLangBtnSide.addEventListener('click', this.addHandlerChangeLanguage.bind(this));
    this.overlay.addEventListener('click', this._toggleSideMenu.bind(this));
    this.menuBtn.addEventListener('click', this._toggleSideMenu.bind(this));
    this.themeBtn.addEventListener(
      'click',
      function () {
        this._changeTheme();
        this._changeIcons();
        const curTheme = localStorage.getItem('myFolioDark');
        if (!curTheme || curTheme === 'disabled') {
          localStorage.setItem('myFolioDark', 'enabled');
        } else localStorage.setItem('myFolioDark', 'disabled');
      }.bind(this)
    );
    this.footerBtns.addEventListener('click', this.displayExtraFooterBox.bind(this));
    this.footerMenuObserver.observe(this.footerMenu);
    this.footerSubmitBtn.addEventListener('click', this.submitFooterMessage.bind(this));
    //empty form fields
    document.querySelectorAll('.footer__input-field').forEach((field) => (field.value = ''));

    this.makeDivFall();
  }

  async addHandlerChangeLanguage() {
    try {
      const currentLang = this.switchLangBtn.textContent === 'ru' ? 'en' : 'ru';
      const currentLink = window.location.href.split('/');
      const currentPage = currentLink[currentLink.length - 1];
      const res = await axios({
        method: 'GET',
        // url: 'http://127.0.0.1:8000/api/v1/users/login',
        // url: `http://127.0.0.1:3000/switch-language?lang=${currentLang}&page=${currentPage}`,
        url: `/switch-language?lang=${currentLang}&page=${currentPage}`,
      });
      if (res.data.status === 'success') {
        location.reload();
      }
    } catch (err) {
      console.log(err); // add error handler
    }
  }

  // running code-related functions
  makeDivFall() {
    const thisPage = document.getElementById('this-page').textContent;
    if (thisPage === 'indiv-project') return;
    this.fallingDiv.style.transform = `translateY(${this.fallingDivTranslateValue}vh)`;
    this.fallingDivTranslateValue < 90
      ? (this.fallingDivTranslateValue += 2.25)
      : (this.fallingDivTranslateValue = 2.25);

    if (this.fallingDivTranslateValue > 2.25) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
      this.runningCodeDiv.style.backgroundImage = `none`;
    }
    if (this.fallingDivTranslateValue > 9.75) {
      this.runningCodeDiv.style.transform = `translateY(18vh) scale(1.2)`;
    }
    if (this.fallingDivTranslateValue > 14.5) {
      this.runningCodeDiv.style.transform = `translateY(9vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 20.75) {
      this.runningCodeDiv.style.transform = `translateY(5vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 23) {
      this.runningCodeDiv.style.transform = `translateY(3vh) scale(1.1)`;
    }
    if (this.fallingDivTranslateValue > 26.75) {
      this.runningCodeDiv.style.transform = `translateY(-12vh) scale(1.3)`;
    }
    if (this.fallingDivTranslateValue > 46.75) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
    }
    if (this.fallingDivTranslateValue > 50) {
      this.runningCodeDiv.style.transform = `translateY(-2vh) scale(1)`;
    }
    if (this.fallingDivTranslateValue > 66.75) {
      this.runningCodeDiv.style.transform = `translateY(-25vh) scale(1.2)`;
      this.runningCodeDiv.style.backgroundImage = `linear-gradient(to top, var(--main-bg), transparent)`;
    }
    if (this.fallingDivTranslateValue > 85.75) {
      this.runningCodeDiv.style.transform = `translateY(2vh) scale(1)`;
    }
    setTimeout(
      function () {
        this.runningDiv.style.transform = `translateX(100%)`;
      }.bind(this),
      50
    );
    setTimeout(() => {
      this.runningDiv.style.transition = `transform 0s, background-color 0.5s ease`;
      this.runningDiv.style.transform = `translateX(0%)`;
      this.runningDiv.style.top = `${this.fallingDivTranslateValue - 2.25}vh`;
      setTimeout(
        function () {
          this.runningDiv.style.transition = `transform 6s linear, background-color 0.5s ease`;
        }.bind(this),
        50
      );
      this.makeDivFall();
    }, 6200);
  }

  displayExtraFooterBox(e) {
    this.footerMenu.classList.add('footer-menu__expand');
    this.footerExtraDiv.classList.remove('footer-menu__extra__hidden');
    if (e.target.closest('.footer-contacts-btn')) {
      if (this.footerWindow !== 'contacts') {
        if (window.innerWidth < 1080) {
          this.footerExtraDiv.style.transform = `rotateY(0deg)`;
          this.footerWindow = 'contacts';
        }
      }
    }
    if (e.target.closest('.footer-address-btn')) {
      if (this.footerWindow !== 'address') {
        if (window.innerWidth < 1080) {
          this.footerExtraDiv.style.transform = `rotateY(180deg)`;
          this.footerWindow = 'address';
          // console.log('switched');
        }
      }
    }
    setTimeout(() => document.body.scrollIntoView({ block: 'end', behavior: 'smooth' }), 100);
  }

  hideExtraFooterBox() {
    this.footerMenu.classList.remove('footer-menu__expand');
    this.footerExtraDiv.classList.add('footer-menu__extra__hidden');
  }

  async submitFooterMessage(e) {
    try {
      e.preventDefault();
      const messageArr = new FormData(document.querySelector('.footer-menu__form'));
      const messageObject = Object.fromEntries(messageArr);
      let res;
      //check if the message has already been sent from this devDependencies
      if (window.localStorage.getItem('ftrmsgsent') !== null) throw new Error('Already tried');
      // send a message if it has not been sent from this device yet
      if (window.localStorage.getItem('ftrmsgsent') === null) {
        res = await axios({
          method: 'POST',
          // url: `http://127.0.0.1:3000/message`,
          url: `/message`,
          data: messageObject,
        });
      }
      //throw an error, if there is no internet connection
      else throw new Error();
      //display error, if such email already exists, or if limit is exceeded
      if (res.status !== 200) throw new Error(res.response);
      //save a cookie/storage, if message is sent
      window.localStorage.setItem('ftrmsgsent', 'true');
      document.querySelectorAll('.footer__input-field').forEach((field) => (field.value = ''));
      //display success message
      this.errorWindowMessage.textContent =
        this.switchLangBtn.textContent === 'ru'
          ? `Message was successfully sent. I will contact you soon.`
          : `??????????????! ?????????????????? ????????????????????. ?? ?????????? ?? ???????? ??????????????.`;
      this._makeElementAppear(this.errorWindow, 200, 'block');
      setTimeout(() => {
        this._makeElementDisappear(this.errorWindow, 200);
      }, 3000);
    } catch (err) {
      // rendering error message, if internet connection is lost
      if (err.message === 'Network Error') {
        this.errorWindowMessage.textContent =
          this.switchLangBtn.textContent === 'ru'
            ? `Oops, something went wrong. Please, check your internet connection.`
            : `??????, ??????-???? ?????????? ???? ??????. ????????????????????, ?????????????????? ???????????????? ????????????????????.`;
        return this._displayErrorMessageBox();
      }
      // rendering error message, if localDatabase has records
      if (err.message === 'Already tried') {
        this.errorWindowMessage.textContent =
          this.switchLangBtn.textContent === 'ru'
            ? `You have already tried to contact me via this form. Please, contact me via email.`
            : `???? ?????? ?????????????????? ?????????????????? ???? ?????? ?????????? ?????? ??????????. ????????????????????, ???????????????????? ?????????????????? ?????????? ?????????????????????? ??????????.`;
        return this._displayErrorMessageBox();
      }
      // rendering error message, if such email already exists or the cookie record exists
      if (err.response.data.errorMessage && err.response.data.errorMessage === 'Duplicate') {
        this.errorWindowMessage.textContent =
          this.switchLangBtn.textContent === 'ru'
            ? `You have already tried to contact me via this form. Please, contact me via email.`
            : `???? ?????? ?????????????????? ?????????????????? ???? ?????? ?????????? ?????? ??????????. ????????????????????, ???????????????????? ?????????????????? ?????????? ?????????????????????? ??????????.`;
        return this._displayErrorMessageBox();
      }
      // rendering error message, if the email is not valid
      if (err.response.data.errorMessage && err.response.data.errorMessage.startsWith('VisitorMessages')) {
        this.errorWindowMessage.textContent =
          this.switchLangBtn.textContent === 'ru'
            ? `Please, provide a valid email address.`
            : `????????????????????, ?????????????????????? ???????????????????????? ?????????????????????? ??????????.`;
        return this._displayErrorMessageBox();
      }
      // rendering error message, if the DB is full
      if (err.response.data.errorMessage && err.response.data.errorMessage === 'DB full') {
        this.errorWindowMessage.textContent =
          this.switchLangBtn.textContent === 'ru'
            ? `Unfortunately, your message cannot be sent now. Please, try again later or contact me via email.`
            : `?? ??????????????????, ?? ???? ???????? ?????????????????? ???????? ?????????????????? ????????????. ????????????????????, ???????????????????? ??????????, ?????? ?????????????????? ???? ???????? ?????????? ?????????????????????? ??????????.`;
        return this._displayErrorMessageBox();
      }
    }
  }

  _displayErrorMessageBox() {
    this._makeElementAppear(this.errorWindow, 200, 'block');
    setTimeout(() => {
      this._makeElementDisappear(this.errorWindow, 200);
    }, 3000);
  }

  _changeTheme() {
    document.querySelectorAll('.icon__theme').forEach((btn) => btn.classList.toggle('icon__theme--active'));
    if (this.switched === true) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.switched = false;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.switched = true;
    }
  }

  _changeIcons() {
    ThemeSwitcher.switchIconsShared();
    if (this.theViewedPage === 'main-page') ThemeSwitcher.switchIconsMain();
    if (this.theViewedPage === 'about-me') ThemeSwitcher.switchIconsAboutMe();
    if (this.theViewedPage === 'qualifications') ThemeSwitcher.switchIconsQualifications();
    if (this.theViewedPage === 'projects') ThemeSwitcher.switchIconsProjects();
    if (this.theViewedPage === 'experience') ThemeSwitcher.switchIconsExperience();
    if (this.theViewedPage === 'indiv-project') ThemeSwitcher.switchIconsIndiv();
  }

  _toggleSideMenu() {
    if (this.overlay.style.display === 'block' && !this.sideMenu.classList.contains('side-menu__out')) return;
    this.sideMenu.classList.toggle('side-menu__out');
    if (this.overlay.style.display === 'block') {
      this.overlay.style.opacity = 0;
      setTimeout(
        function () {
          this.overlay.style.display = 'none';
        }.bind(this),
        400
      );
    } else {
      this.overlay.style.display = 'block';
      this.overlay.style.opacity = 1;
    }
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

export default SharedView;
