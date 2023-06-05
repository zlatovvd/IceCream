const refs = {
  menuOpenBtn: document.querySelector(".menu__open-btn"),
  menuCloseBtn: document.querySelector(".menu__close-btn"),
  mobileMenu: document.querySelector(".mobile-menu"),
  mobileNavBtn: document.querySelector(".mobile-nav-btn"),
  buyNowBtn: document.querySelectorAll(".buy-now__btn"),
  buyNowModal: document.querySelector(".backdrop"),
  modalCloseBtn: document.querySelector(".modal__close-btn"),
  anchors: document.querySelectorAll('a[href*="#"]'),
};

const toggleMenu = () => {
  refs.mobileMenu.classList.toggle("is-visible");
};

const togleModal = () => {
  refs.buyNowModal.classList.toggle("is-hidden");
};

refs.menuOpenBtn.addEventListener("click", toggleMenu);
refs.menuCloseBtn.addEventListener("click", toggleMenu);
refs.modalCloseBtn.addEventListener("click", togleModal);
refs.mobileNavBtn.addEventListener("clicl", togleModal);

for (let buyNow of refs.buyNowBtn) {
  buyNow.addEventListener("click", togleModal);
}

for(let anchor of refs.anchors) {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    refs.mobileMenu.classList.remove("is-visible");
    document.querySelector(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
