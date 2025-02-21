import { techData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const techContainer = document.querySelector(".tech-img-box");
  if (techContainer) {
    techContainer.innerHTML = techData
      .map(
        (tech) => `
            <img
              src="${tech.imageUrl}"
              alt="${tech.title}"
              class="tech"
            />`
      )
      .join("");
  }
});
