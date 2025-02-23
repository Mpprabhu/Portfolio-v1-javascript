window.addEventListener("load", () => {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const btnLeft = slider.querySelector(".slider__btn--left");
  const btnRight = slider.querySelector(".slider__btn--right");
  const dotContainer = slider.querySelector(".dots");
  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const updateDots = (slide) => {
    dotContainer
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    updateDots(slide);
  };

  const nextSlide = () => {
    currentSlide = currentSlide === maxSlide - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = currentSlide === 0 ? maxSlide - 1 : currentSlide - 1;
    goToSlide(currentSlide);
  };

  let autoSlideInterval = setInterval(nextSlide, 5000);
  const resetInterval = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  };

  const init = () => {
    createDots();
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  btnLeft.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      currentSlide = Number(e.target.dataset.slide);
      goToSlide(currentSlide);
      resetInterval();
    }
  });
});
