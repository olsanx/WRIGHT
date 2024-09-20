const navLinks = document.querySelectorAll('.nav-links');

const activePage = localStorage.getItem('activePage');

if (activePage) {
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === activePage) {
      link.classList.add('active');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(links => links.classList.remove('active'));

    this.classList.add('active');

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);
  });
});




const mainContent = document.querySelector('.main-content');

window.addEventListener('load', () => {
  mainContent.classList.add('fade-in');
});

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);

    mainContent.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = this.href; 
    }, 500); 
  });
});




const momentsDiv = document.querySelector('.moments');

let isDown = false;
let startY;
let scrollTop;

momentsDiv.addEventListener('mousedown', (e) => {
  isDown = true;
  momentsDiv.classList.add('active');
  startY = e.pageY - momentsDiv.offsetTop;
  scrollTop = momentsDiv.scrollTop;
  momentsDiv.style.cursor = 'grabbing';  
});

momentsDiv.addEventListener('mouseleave', () => {
  isDown = false;
  momentsDiv.style.cursor = 'grab';  
});

momentsDiv.addEventListener('mouseup', () => {
  isDown = false;
  momentsDiv.style.cursor = 'grab';  
});

momentsDiv.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const y = e.pageY - momentsDiv.offsetTop;
  const walk = (y - startY) * 1.5; 
  momentsDiv.scrollTop = scrollTop - walk;
});