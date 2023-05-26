const refs = {
  menuOpenBtn: document.querySelector(".menu__open-btn"),
  menuCloseBtn: document.querySelector(".menu__close-btn"),
  mobileMenu: document.querySelector(".mobile-menu"),
  mobileNavBtn: document.querySelector(".mobile-nav-btn"),
  buyNowBtn: document.querySelector(".buy-now__btn"),
  buyNowModal: document.querySelector(".backdrop"),
  modalCloseBtn: document.querySelector(".modal__close-btn"),
};

const toggleMenu = () => {
  refs.mobileMenu.classList.toggle("is-visible");
  refs.menuCloseBtn.classList.toggle("is-visible");
  refs.menuOpenBtn.classList.toggle("is-visible");
};

const togleModal = () => {
    console.log('click');
  refs.buyNowModal.classList.toggle("is-hidden");
};

refs.menuOpenBtn.addEventListener("click", toggleMenu);
refs.menuCloseBtn.addEventListener("click", toggleMenu);
refs.buyNowBtn.addEventListener("click", togleModal);
refs.modalCloseBtn.addEventListener("click", togleModal);
refs.mobileNavBtn.addEventListener("clicl", togleModal);
