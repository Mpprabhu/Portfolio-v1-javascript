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
          <img src="${project.image}" alt="${
          project.subheading
        }" class="project-img" />
          <a href="${project.githubLink}" target="_blank" class="${
          project.githubLink ? "github-btn" : "none"
        }">
            <i class="ph ph-github-logo"></i> View on GitHub
          </a>
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
