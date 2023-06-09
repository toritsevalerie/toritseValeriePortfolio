// Hamgurger Menu

const hamburgerMenuDropDown = document.querySelector(`.hamburger-menu`);

const handleClick = () => {
  const dropDownMenu = document.querySelector(`.drop-down-menu`);
  dropDownMenu.style.display = "block";
  dropDownMenu.style.display = "flex";
};

hamburgerMenuDropDown.addEventListener("click", handleClick);


const closeButtonDropDown = document.querySelector(`.close-button`)

const handleExitClick = ()=> { 
    const dropDownMenu = document.querySelector(`.drop-down-menu`);
    dropDownMenu.style.display = "none";
}

closeButtonDropDown.addEventListener("click", handleExitClick);