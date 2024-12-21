'use strict';

/** Toggling the state of the Nav Bar on different screen sizes */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


/** Handling the Nav Bar background color on scrolling the webpage */
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');  
  if (window.scrollY > 50) {  
    header.classList.add('active');  
  } else {
    header.classList.remove('active');  
  }
});


/** Handling the Nav Bar link color on hovering on them */
document.querySelectorAll('.navbar-link').forEach(link => { 
  link.addEventListener('mouseover', () => { 
    link.style.color = '#E93B81'; 
  }); 
  link.addEventListener('mouseout', () => { 
    link.style.color = 'white'; 
  }); 
});


/** Dismissing the Nav Bar and Overlay when a Nav Bar link is seleected */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


/** Function for Auto-Scrolling to the top of the Webpage when at 400px */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
