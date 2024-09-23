
               //NAVLINKS-SLASH//

const navLinks = document.querySelectorAll('.nav-links');

const activePage = localStorage.getItem('activePage');

if (activePage) {
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === activePage) {
      link.classList.add('active');
    }
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(links => links.classList.remove('active'));

    this.classList.add('active');

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);
  });
});



                //FADEIN_FADEOUT//
         
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





const visual2 = document.querySelector('.visual2');

let isRight = false;
let startX;
let scrollLeft;

visual2.addEventListener('mousedown', (e) => {
  isDown = true;
  visual2.classList.add('active'); // Optional: Add visual feedback if needed
  startX = e.pageX - visual2.offsetLeft; // Get initial mouse X position
  scrollLeft = visual2.scrollLeft; // Get initial scroll position
  visual2.style.cursor = 'grabbing'; // Change cursor to grabbing when clicked
});

visual2.addEventListener('mouseleave', () => {
  isDown = false;
  visual2.classList.remove('active');
  visual2.style.cursor = 'grab'; // Reset cursor to grab when mouse leaves
});

visual2.addEventListener('mouseup', () => {
  isDown = false;
  visual2.classList.remove('active');
  visual2.style.cursor = 'grab'; // Reset cursor to grab after mouse up
});

visual2.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run this function when the mouse is down
  e.preventDefault();
  const x = e.pageX - visual2.offsetLeft; // Get current mouse X position
  const walk = x - startX; // Calculate the distance moved by the mouse
  visual2.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});
