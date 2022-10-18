const activeClass = "ativo";

const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add(activeClass);

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    };

    tabMenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

const initActiveAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((dt) => {
      dt.addEventListener("click", activeAccordion);
    });
  }
};
initActiveAccordion();

const initSmoothScroll = () => {
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa:
    /* const top = section.offsetTop;
    window.scrollTo({
    top: top,
    behavior: "smooth"
    }); */
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};
initSmoothScroll();

const initVisibleSections = () => {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.5;

    const animatedScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add(activeClass);
        }
      });
    };

    animatedScroll();

    window.addEventListener("scroll", animatedScroll);
  }
};
initVisibleSections();
