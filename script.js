

const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(links => {
  links.addEventListener('click', function() {
    navLinks.forEach(links => links.classList.remove('active'));
    
    // Add active class to the clicked link
    this.classList.add('active');
  });
});
