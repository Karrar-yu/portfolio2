const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

const cards = document.querySelectorAll('.cardd');

cards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('is-flipped');
  });
});




function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.Nav-Links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const viewProjectsButton = document.querySelector('.View-Projects');
    const projectsSection = document.querySelector('.project-container');
    
    viewProjectsButton.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('resize', function() {
    var navLinks = document.querySelector('.Nav-Links');
    if (window.innerWidth <= 700) {
      navLinks.classList.add('hidden');
    } else {
      navLinks.classList.remove('hidden');
    }
  });
  
  // Fire the event once on page load to initialize the state based on the screen size
  window.dispatchEvent(new Event('resize'));