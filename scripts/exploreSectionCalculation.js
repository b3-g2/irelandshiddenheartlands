// Get the height of the navbar
var navbarHeight = document.getElementById('navbar').offsetHeight;

// Get the explore section
var exploreSection = document.querySelector('.explore-section');

// Set the height of the explore section
exploreSection.style.height = `calc(100vh - ${navbarHeight}px)`;