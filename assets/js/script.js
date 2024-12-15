'use strict';



/**
 * navbar toggle
 */

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



/**
 * Change navbar background color on scroll
 */

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');  // Select the header
  if (window.scrollY > 50) {  // When scrolled more than 50px
    header.classList.add('active');  // Add the 'active' class to the header
  } else {
    header.classList.remove('active');  // Remove the 'active' class when at top
  }
});


/**
 * Change navbar link color on hover
 */

document.querySelectorAll('.navbar-link').forEach(link => { 
  link.addEventListener('mouseover', () => { 
    link.style.color = '#E93B81'; 
  }); 
  link.addEventListener('mouseout', () => { 
    link.style.color = 'white'; 
  }); 
});



/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

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
