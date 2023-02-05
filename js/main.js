import burgerMenu from './burger.js';
import handlerModal from './modal.js';
import sendForm from './mail.js';

const presentReserbeBtn = document.querySelector('.present__reserve-btn');
const pageOverlayModal = document.querySelector('.page__overlay-modal');
const modalClose = document.querySelector('.modal__close');

burgerMenu({
  selectorMenu: '.nav__list',
  selectorOpenMenu: 'nav__list-active',
});

sendForm();

handlerModal(presentReserbeBtn, pageOverlayModal, 'page__overlay_modal-open', modalClose, 6);

let swiper = new Swiper('.review__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.review__slider-button-next',
    prevEl: '.review__slider-button-prev',
  },
});
