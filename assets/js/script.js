const active = "ativo";

const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add(active);

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove(active);
      });
      tabContent[index].classList.add(active);
    };

    tabMenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

const accordionList = document.querySelectorAll(".js-accordion dt");

function activeAccordion() {
  this.classList.toggle(active);
  this.nextElementSibling.classList.toggle(active);
}

accordionList.forEach((dt) => {
  dt.addEventListener("click", activeAccordion);
});
