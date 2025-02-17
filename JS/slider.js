window.addEventListener("load", () => {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const btnLeft = slider.querySelector(".slider__btn--left");
  const btnRight = slider.querySelector(".slider__btn--right");
  const dotContainer = slider.querySelector(".dots");
  let currentSlide = 0;
  const maxSlide = slides.length;

  // Create dots for each slide with the correct class
  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Update active dot styling
  const updateDots = (slide) => {
    dotContainer
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  // Position slides side-by-side and update active dot
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    updateDots(slide);
  };

  // Next slide functionality
  const nextSlide = () => {
    currentSlide = currentSlide === maxSlide - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
  };

  // Previous slide functionality
  const prevSlide = () => {
    currentSlide = currentSlide === 0 ? maxSlide - 1 : currentSlide - 1;
    goToSlide(currentSlide);
  };

  // Auto slide functionality (change slide every 3 seconds)
  let autoSlideInterval = setInterval(nextSlide, 5000);
  const resetInterval = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  };

  // Initialize slider: create dots then position slides
  const init = () => {
    createDots();
    goToSlide(0);
  };
  init();

  // Event listeners for slider controls
  btnRight.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  btnLeft.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // Event listener for dots navigation using the updated class names
  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      currentSlide = Number(e.target.dataset.slide);
      goToSlide(currentSlide);
      resetInterval();
    }
  });
});
