// Slider
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const slidesAll = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");

const slider = function () {
  let currentSlide = 0;
  let maxSlide = slidesAll.length;

  const createDots = function () {
    slidesAll.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide = ${i}></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slidesAll.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // init
  const init = function () {
    createDots();
    goToSlide(0);
    activeDot(0);
  };
  init();

  // functions
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) currentSlide = 0;
    else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) currentSlide = maxSlide - 1;
    else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  // Click
  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);

  // KeyBoard
  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Dots
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const selectSlide = e.target.dataset.slide;
      goToSlide(selectSlide);
      activeDot(selectSlide);
    }
  });
};
slider();
