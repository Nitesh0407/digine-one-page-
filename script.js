

const texts = ["Neurology", "Cardiology", "Dental", "Orthopedic"];


let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;

  document.getElementById("changing-text").textContent = texts[index];
 

}, 2000);









const container = document.querySelector(".comparison-container");
const afterWrapper = document.querySelector(".after-wrapper");
const slider = document.querySelector(".slider-btn");
const line = document.querySelector(".slider-line");

let isDragging = false;

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left;

  if (x < 0) x = 0;
  if (x > rect.width) x = rect.width;

  let percent = (x / rect.width) * 100;

  afterWrapper.style.width = percent + "%";
  slider.style.left = percent + "%";
  line.style.left = percent + "%";
});






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});













  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  };

 
  scrollBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

















