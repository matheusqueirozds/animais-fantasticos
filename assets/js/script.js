const activeClass = "ativo";

function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((li, index) => {
            li.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(e) {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}
initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Forma alternativa
        /*  const topo = section.offsetTop;

    scrollTo({
        top: topo,
        behavior: "smooth",
    }); */
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

    if (sections.length) {
        const windowMetade = innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;

                if (isSectionVisible) section.classList.add(activeClass);
                else section.classList.remove(activeClass);
            });
        }
        animaScroll();

        addEventListener("scroll", animaScroll);
    }
}
initAnimacaoScroll();
