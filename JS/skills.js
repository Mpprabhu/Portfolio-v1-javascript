// skills.js
import { skillsData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.querySelector(
    ".skills-section .grid-3-cols"
  );
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsData
      .map(
        (skill) => `
      <div class="skill">
        <div class="skill-image-box">
          <img src="${skill.image}" alt="${skill.title}" class="skill-image" />
        </div>
        <div class="skill-content">
          <p class="skill-title"><strong>${skill.title}</strong></p>
          <p class="skill-text">${skill.description}</p>
        </div>
      </div>
    `
      )
      .join("");
  }
});
