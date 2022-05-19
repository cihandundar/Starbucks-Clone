// hamburger  menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});


// index slider  section


 let swiper = new Swiper(".team-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});