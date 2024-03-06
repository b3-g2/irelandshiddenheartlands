// Function to rotate the chevron icon when the dropdown menu is clicked
function rotateChevron(event, iconId) {
    event.preventDefault();
    var chevronIcon = document.getElementById(iconId);
    chevronIcon.classList.toggle('rotated');
}

// Add an event listener to handle clicks on dropdown items
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        // Reset the chevron icon to its original state based on the dropdown type
        var dropdownType = item.closest('.dropdown-menu').classList.contains('language-menu') ? 'language' : 'region';
        var chevronIcon = document.querySelector('.' + dropdownType + '-icon');
        chevronIcon.classList.remove('rotated');
    });
});

// Add an event listener to handle clicks outside the dropdown menus
document.addEventListener('click', function (event) {
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
    var dropdownSelectors = document.querySelectorAll('.dropdown-selector');
    var chevronIcons = document.querySelectorAll('.language-icon, .region-icon');

    dropdownMenus.forEach(function (menu, index) {
        // Check if the clicked target is outside the dropdown menu and the corresponding selector
        if (!menu.contains(event.target) && !dropdownSelectors[index].contains(event.target)) {
            // Reset the chevron icon to its original state based on the dropdown type
            var dropdownType = menu.classList.contains('language-menu') ? 'language' : 'region';
            chevronIcons[index].classList.remove('rotated');
        }
    });
});
