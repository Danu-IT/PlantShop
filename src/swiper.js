import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".navigation__next",
    prevEl: ".navigation__prev",
    disabledClass: "navigation__disabled",
  },
});
