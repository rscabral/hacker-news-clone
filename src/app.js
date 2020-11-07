import RouterHandler from './router.js';

/* This callback available on window variable listen to any change on hash of
  url. So, anytime I navigate through our menu, this callback will be called
*/ 
window.onhashchange = () => {
  setActiveLink();
}

function setActiveLink() {
  const links = document.querySelectorAll('.header-link');
  links.forEach(link => {
    const linkPath = link.getAttribute('href');
    const currentPath = window.location.hash;

    if (currentPath === linkPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

class App {
  constructor() {
    new RouterHandler();
  }  
}

new App();