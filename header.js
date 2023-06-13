// Hamgurger Menu

const hamburgerMenuDropDown = document.querySelector(`.hamburger-menu`);

const handleClick = () => {
  const dropDownMenu = document.querySelector(`.drop-down-menu`);
  dropDownMenu.style.display = "block";
  dropDownMenu.style.display = "flex";
};

hamburgerMenuDropDown.addEventListener("click", handleClick);

const closeButtonDropDown = document.querySelector(`.close-button`);

const handleExitClick = () => {
  const dropDownMenu = document.querySelector(`.drop-down-menu`);
  dropDownMenu.style.display = "none";
};

closeButtonDropDown.addEventListener("click", handleExitClick);

// Making contact button bigger on scroll and fixed on scroll

const handleScroll = () => {
  const nav = document.querySelector(`nav`);
  const contactButtonFixed = document.querySelector(`.nav-contact-fixed `);
  const scrollPosition = window.scrollY;
  const wrapper = document.querySelector(".wrapper");
  const wrapperCalc = wrapper.getBoundingClientRect();
  const wrapperRight = wrapperCalc.right;
  if (scrollPosition >= 0 && scrollPosition <= 30) {
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.padding = "0px, 40px";
    nav.style.width = "";
    contactButtonFixed.style.position = "";
    contactButtonFixed.style.transform = "";
  } else if (scrollPosition > 30 && window.innerWidth > 630) {
    nav.style.width = "64.5%";
    contactButtonFixed.style.transform = "scale(1.1)";
    contactButtonFixed.style.transition = "transform 0.5s ease";
    contactButtonFixed.style.position = "fixed";
    contactButtonFixed.style.top = "20px";
    contactButtonFixed.style.right = `${window.innerWidth - wrapperRight}px`;

    contactButtonFixed.style.zIndex = "999";
  }
};

window.addEventListener("scroll", handleScroll);
