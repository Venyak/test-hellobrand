const burgerMenu = (option) => {
  const {
    selectorBurger = '.burger',
    activeBurger = 'burger-active',
    selectorMenu,
    selectorOpenMenu,
  } = option;

  const burger = document.querySelector(selectorBurger);
  const menu = document.querySelector(selectorMenu);

  burger.addEventListener('click', () => {
    burger.classList.toggle(activeBurger);
    menu.classList.toggle(selectorOpenMenu);
  });
};

export default burgerMenu;
