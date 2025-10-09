// script.js - External JS for Monisha A Portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Nav mobile toggle
  const menuBtn = document.getElementById('menuBtn');
  const navList = document.querySelector('nav ul');
  if(menuBtn && navList){
    menuBtn.addEventListener('click', function() {
      navList.classList.toggle('open');
    });
    // Close nav when a link is clicked (mobile UX)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if(window.innerWidth <= 900){
          navList.classList.remove('open');
        }
      });
    });
  }

  // Year
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  // ...move other JS here as needed...
});
