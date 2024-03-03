// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the class 'current-year'
const yearElement = document.querySelector('.current-year');

// Update the content of the element to display the current year
if (yearElement) {
    yearElement.textContent = currentYear;
}
