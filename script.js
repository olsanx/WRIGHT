
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


function toggleMenu() {
  const navContainer = document.querySelector('.nav-container');
  navContainer.classList.toggle('show-menu');
}





const navbar = document.querySelector('.nav-container');
const targetSection = document.getElementById('side-projects');

window.addEventListener('scroll', () => {
  const sectionRect = targetSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (sectionRect.top <= viewportHeight * 0.10 && sectionRect.bottom >= 0) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
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



// Handle button scrolling and mouse drag independently
function setupScrollButtonsAndDrag() {
  const visualContainers = document.querySelectorAll('.visual-container'); // Select all visual containers

  visualContainers.forEach(container => {
    const leftBtn = container.querySelector('.left-arrow'); // Left arrow button
    const rightBtn = container.querySelector('.right-arrow'); // Right arrow button
    const visualContent = container.querySelector('.visual1, .visual2, .visual3, .visual4, .visual5'); // Visual content

    // Scroll the container to the left when the left arrow is clicked
    leftBtn.addEventListener('click', () => {
      visualContent.scrollBy({
        left: -visualContent.clientWidth * 0.75, // Scroll 75% of container width to the left
        behavior: 'smooth' // Smooth scrolling
      });
    });

    // Scroll the container to the right when the right arrow is clicked
    rightBtn.addEventListener('click', () => {
      visualContent.scrollBy({
        left: visualContent.clientWidth * 0.75, // Scroll 75% of container width to the right
        behavior: 'smooth'
      });
    });

    // Drag-to-scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    visualContent.addEventListener('mousedown', (e) => {
      isDown = true;
      visualContent.classList.add('active'); // Optional: Add visual feedback if needed
      startX = e.pageX - visualContent.offsetLeft; // Get initial mouse X position
      scrollLeft = visualContent.scrollLeft; // Get initial scroll position
      visualContent.style.cursor = 'grabbing'; // Change cursor to grabbing
    });

    visualContent.addEventListener('mouseleave', () => {
      isDown = false;
      visualContent.classList.remove('active');
      visualContent.style.cursor = 'grab'; // Reset cursor
    });

    visualContent.addEventListener('mouseup', () => {
      isDown = false;
      visualContent.classList.remove('active');
      visualContent.style.cursor = 'grab'; // Reset cursor
    });

    visualContent.addEventListener('mousemove', (e) => {
      if (!isDown) return; // Only run if mouse is down
      e.preventDefault();
      const x = e.pageX - visualContent.offsetLeft;
      const walk = x - startX; // Calculate distance moved
      visualContent.scrollLeft = scrollLeft - walk; // Update scroll position
    });
  });
}

// Initialize scroll buttons and drag-to-scroll functionality
setupScrollButtonsAndDrag();



