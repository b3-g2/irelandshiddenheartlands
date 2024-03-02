// // JavaScript to toggle navbar background color on scroll
// var nav = document.querySelector('nav');
// var heroSectionHeight = document.querySelector('.hero-section').offsetHeight;
// var scrollThreshold = 50; // Adjust the scroll threshold as needed

// window.addEventListener('scroll', function () {
//     if (window.scrollY > scrollThreshold) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });


// Function to rotate the chevron icon when the dropdown menu is clicked
function rotateChevron(event) {
    event.preventDefault();
    var chevronIcon = document.getElementById('chevronIcon');
    chevronIcon.classList.toggle('rotated');
}

// Add an event listener to handle clicks on dropdown items
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        // Reset the chevron icon to its original state
        var chevronIcon = document.querySelector('.language-icon');
        chevronIcon.classList.remove('rotated');
    });
});

// Add an event listener to handle clicks outside the dropdown menu
document.addEventListener('click', function (event) {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var languageSelector = document.querySelector('.language-selector');
    var chevronIcon = document.querySelector('.language-icon');

    // Check if the clicked target is outside the dropdown menu and the language selector
    if (!dropdownMenu.contains(event.target) && !languageSelector.contains(event.target)) {
        // Reset the chevron icon to its original state
        chevronIcon.classList.remove('rotated');
    }
});
