// projects.js
import { projectsData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(
    ".projects-section .grid-3-cols"
  );
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData
      .map(
        (project) => `
      <div class="project-card">
        <div class="project-img-box">
          <img src="${project.image}" alt="${project.subheading}" class="project-img" />
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subheading">${project.subheading}</p>
          <p class="project-description">${project.description}</p>
        </div>
      </div>
    `
      )
      .join("");
  }
});
