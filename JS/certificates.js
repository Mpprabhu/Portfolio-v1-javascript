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
        <img src="${cert}" alt="Certificate" class="c-img" />
      </div>
    `
      )
      .join("");
    // Append slider controls and dots container
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
