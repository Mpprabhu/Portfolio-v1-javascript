// certificates.js
import { certificatesData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(
    ".section-certificates .slider"
  );
  if (sliderContainer) {
    sliderContainer.innerHTML = certificatesData
      .map(
        (cert) => `
      <div class="slide">
        <img src="${cert.url}" alt="${cert.title}" class="c-img" />
      </div>
    `
      )
      .join("");
    sliderContainer.innerHTML += `
      <button class="slider__btn slider__btn--left">
        <i class="ph ph-caret-left btn-icon"></i>
      </button>
      <button class="slider__btn slider__btn--right">
        <i class="ph ph-caret-right btn-icon"></i>
      </button>
      <div class="dots"></div>
    `;
  }
});
