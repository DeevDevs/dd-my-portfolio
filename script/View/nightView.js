class ThemeSwitcher {
  header = document.querySelector(".header-menu");
  sideMenu = document.querySelector(".side-menu");
  footer = document.querySelector(".footer-menu");
  sectionsMain = document.querySelectorAll(".sec__main");
  sectionAbout = document.querySelector(".about-me");
  sectionLearning = document.querySelector(".learning");
  sectionProjects = document.querySelector(".projects");
  sectionExperience = document.querySelector(".experience");
  aboutMeIcon = document.querySelector(".about-me__icon");
  learningIcon = document.querySelector(".learning__icon");
  projectsIcon = document.querySelector(".projects__icon");
  experienceIcon = document.querySelector(".experience__icon");

  switchTheme() {
    document.body.classList.toggle("bg-main");
    this.header.classList.toggle("bg-main");
    this.sideMenu.classList.toggle("bg-secondary");
    this.footer.classList.toggle("text-main");
    document.body.classList.toggle("text-main");
    this.sectionsMain.forEach((section) => {
      section.classList.toggle("text-main");
    });
    this.sectionAbout.classList.toggle("about-me-dark");
    this.sectionLearning.classList.toggle("learning-dark");
    this.sectionProjects.classList.toggle("projects-dark");
    this.sectionExperience.classList.toggle("experience-dark");
    this.aboutMeIcon.src = "./images/icons/icon-me-night.svg";
    this.learningIcon.src = "./images/icons/learning-icon-night.svg";
    this.projectsIcon.src = "./images/icons/projects-icon-night.svg";
    this.experienceIcon.src = "./images/icons/experience-icon-night.svg";
  }
}

export default new ThemeSwitcher();
