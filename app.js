let menu  = document.querySelector(".menu-bar i");
let navbar = document.querySelector(".navbar");
let close = document.querySelector(".close i");

menu.addEventListener("click", function(){
    navbar.classList.add("show");
})
close.addEventListener("click", function(){
    navbar.classList.remove("show");
})

let drop_down_dots = document.querySelector(".drop_down_dots")
let three_dot_btn = document.querySelector(".dots_icons_navbar")

three_dot_btn.addEventListener("click", function(){
  drop_down_dots.classList.toggle("active");
})


var swiper = new Swiper(".test_swipper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });

  window.onload =()=>{
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".parent").style.display = "block";
  }