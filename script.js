
//NAVLINKS-SLASH

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
  link.addEventListener('click', function () {
    navLinks.forEach(links => links.classList.remove('active'));

    this.classList.add('active');

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);
  });
});



//FADEIN_FADEOUT

const mainContent = document.querySelector('.main-content');

window.addEventListener('load', () => {
  mainContent.classList.add('fade-in');
});

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);

    mainContent.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});



/*
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
*/

const visual1 = document.querySelector('.visual1');

let isRight = false;
let startX;
let scrollLeft;

visual1.addEventListener('mousedown', (e) => {
  isDown = true;
  visual1.classList.add('active'); // Optional: Add visual feedback if needed
  startX = e.pageX - visual1.offsetLeft; // Get initial mouse X position
  scrollLeft = visual1.scrollLeft; // Get initial scroll position
  visual1.style.cursor = 'grabbing'; // Change cursor to grabbing when clicked
});

visual1.addEventListener('mouseleave', () => {
  isDown = false;
  visual1.classList.remove('active');
  visual1.style.cursor = 'grab'; // Reset cursor to grab when mouse leaves
});

visual1.addEventListener('mouseup', () => {
  isDown = false;
  visual1.classList.remove('active');
  visual1.style.cursor = 'grab'; // Reset cursor to grab after mouse up
});

visual1.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run this function when the mouse is down
  e.preventDefault();
  const x = e.pageX - visual1.offsetLeft; // Get current mouse X position
  const walk = x - startX; // Calculate the distance moved by the mouse
  visual1.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});



const visual2 = document.querySelector('.visual2');


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



const visual3 = document.querySelector('.visual3');


visual3.addEventListener('mousedown', (e) => {
  isDown = true;
  visual3.classList.add('active'); // Optional: Add visual feedback if needed
  startX = e.pageX - visual3.offsetLeft; // Get initial mouse X position
  scrollLeft = visual3.scrollLeft; // Get initial scroll position
  visual3.style.cursor = 'grabbing'; // Change cursor to grabbing when clicked
});

visual3.addEventListener('mouseleave', () => {
  isDown = false;
  visual3.classList.remove('active');
  visual3.style.cursor = 'grab'; // Reset cursor to grab when mouse leaves
});

visual3.addEventListener('mouseup', () => {
  isDown = false;
  visual3.classList.remove('active');
  visual3.style.cursor = 'grab'; // Reset cursor to grab after mouse up
});

visual3.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run this function when the mouse is down
  e.preventDefault();
  const x = e.pageX - visual3.offsetLeft; // Get current mouse X position
  const walk = x - startX; // Calculate the distance moved by the mouse
  visual3.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});


const visual4 = document.querySelector('.visual4');

visual4.addEventListener('mousedown', (e) => {
  isDown = true;
  visual4.classList.add('active'); // Optional: Add visual feedback if needed
  startX = e.pageX - visual4.offsetLeft; // Get initial mouse X position
  scrollLeft = visual4.scrollLeft; // Get initial scroll position
  visual4.style.cursor = 'grabbing'; // Change cursor to grabbing when clicked
});

visual4.addEventListener('mouseleave', () => {
  isDown = false;
  visual4.classList.remove('active');
  visual4.style.cursor = 'grab'; // Reset cursor to grab when mouse leaves
});

visual4.addEventListener('mouseup', () => {
  isDown = false;
  visual4.classList.remove('active');
  visual4.style.cursor = 'grab'; // Reset cursor to grab after mouse up
});

visual4.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run this function when the mouse is down
  e.preventDefault();
  const x = e.pageX - visual4.offsetLeft; // Get current mouse X position
  const walk = x - startX; // Calculate the distance moved by the mouse
  visual4.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});


const visual5 = document.querySelector('.visual5');

visual5.addEventListener('mousedown', (e) => {
  isDown = true;
  visual5.classList.add('active');
  startX = e.pageX - visual5.offsetLeft;
  scrollLeft = visual5.scrollLeft;
  visual5.style.cursor = 'grabbing';
});

visual5.addEventListener('mouseleave', () => {
  isDown = false;
  visual5.classList.remove('active');
  visual5.style.cursor = 'grab';
});

visual5.addEventListener('mouseup', () => {
  isDown = false;
  visual5.classList.remove('active');
  visual5.style.cursor = 'grab';
});

visual5.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - visual5.offsetLeft;
  const walk = x - startX;
  visual5.scrollLeft = scrollLeft - walk;
});
