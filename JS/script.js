const header = document.querySelector(".header");
const aboutSection = document.querySelector(".about-section");
const allSections = document.querySelectorAll(".section");
const footer = document.querySelector("footer");

// Sticky Navigation
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
};
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
observer.observe(aboutSection);

// Section Revealer
const revealElement = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealElement, {
  root: null,
  threshold: 0.1,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Contact Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".btn-contact");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModel.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Footer text
footer.textContent = `Copyright © ${new Date().getFullYear()} by Prabhu M P, This project is used as my personal Portfolio and also as a development project, Best to view my portfolio in desktop`;

// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll Back to Top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Scroll to Other Sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close Mobile Navigation via clicking link
    if (link.classList.contains("nav-link"))
      header.classList.toggle("nav-open");
  });
});
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// --- Dynamic Content Generation for Skills, Projects, and Certificates ---
document.addEventListener("DOMContentLoaded", () => {
  // Skills Section
  const skills = [
    {
      title: "UI/UX Designer",
      description:
        "I have experience in UI/UX design, where I've applied design principles to create intuitive and engaging user interfaces.",
      image: "img/design.png",
    },
    {
      title: "Web Developer",
      description:
        "I have experience developing and maintaining responsive, dynamic websites using modern web technologies.",
      image: "img/web.png",
    },
    {
      title: "Game Developer",
      description:
        "I have experience developing engaging and interactive games and mechanisms using Unity and game physics.",
      image: "img/game.png",
    },
  ];
  const skillsContainer = document.querySelector(
    ".skills-section .grid-3-cols"
  );
  if (skillsContainer) {
    skillsContainer.innerHTML = skills
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

  // Projects Section
  const projects = [
    {
      number: "01",
      title: "Fictional Project for Web Development",
      subheading: "Omnifood — Health AI",
      description:
        "Learned the concepts of Front-end and made a complete project for a fictional company Omnifood, implemented some concepts like Grid and Flexbox for the layout and designed based on respective personalities.",
      image: "projects/omni-food.png",
    },
    {
      number: "02",
      title: "Designed an App for Hackathon",
      subheading: "Hodo — Tourist App",
      description:
        "HODO is an innovative tourist app designed and developed for a hackathon. This project showcases a comprehensive travel solution, user experience, local recommendations, and navigation assistance.",
      image: "projects/hodo.png",
    },
    {
      number: "03",
      title: "Worked & Designed in Hackathon",
      subheading: "Classmaster — Organizer App",
      description:
        "ClassMaster is an organizer app and web platform developed by our team for a hackathon, where I contributed to the web development. It highlights an organization app featuring a centralized view.",
      image: "projects/classmaster.png",
    },
    {
      number: "04",
      title: "JavaScript Development Projects",
      subheading: "Beginner to Advanced",
      description:
        "The fictional projects range from basic exercises, such as DOM manipulation and mini-games, to more advanced applications like an interactive map and bank transactions with the help of courses and YouTube.",
      image: "projects/webProjects.png",
    },
    {
      number: "05",
      title: "Game Development Projects",
      subheading: "Unity Game Mechanisms",
      description:
        "I have developed game mechanisms for both Third-Person Shooter (TPS) and endless runner games in 2D and 3D. This involves key gameplay as player controls, environment interaction, shooting mechanics for TPS.",
      image: "projects/unityProjects.png",
    },
    {
      number: "06",
      title: "Unity AR Project for Hackathon",
      subheading: "EDxAR - AR Domain Winner",
      description:
        "I contributed as a Unity AR Developer in the Innothon 30-hour Hackathon at my college, where our team won - AR Domain Winner. My role involved scripting and developing core logic to ensure app functionality.",
      image: "projects/AR Project.png",
    },
  ];
  const projectsContainer = document.querySelector(
    ".projects-section .grid-2-cols"
  );
  if (projectsContainer) {
    projectsContainer.innerHTML = projects
      .map(
        (project) => `
      <div class="step-text-box">
        <p class="step-number">${project.number}</p>
        <h3 class="third-heading">${project.title}</h3>
        <p class="subheading margin-top-correction">${project.subheading}</p>
        <p class="step-description">${project.description}</p>
      </div>
      <div class="step-img-box">
        <img src="${project.image}" alt="${project.subheading}" class="step-img" />
      </div>
    `
      )
      .join("");
  }

  // Certificates Section (Slider)
  const certificates = [
    "certificates/1.png",
    "certificates/2.png",
    "certificates/3.png",
    "certificates/4.png",
    "certificates/5.png",
  ];
  const sliderContainer = document.querySelector(
    ".section-certificates .slider"
  );
  if (sliderContainer) {
    sliderContainer.innerHTML = certificates
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
