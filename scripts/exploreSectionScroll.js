const exploreContent = document.getElementById('exploreContent');
let isMouseDown = false;
let startX;
let scrollLeft;

exploreContent.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - exploreContent.offsetLeft;
    scrollLeft = exploreContent.scrollLeft;
    exploreContent.classList.add('grabbing');
});

exploreContent.addEventListener('mouseleave', () => {
    isMouseDown = false;
    exploreContent.classList.remove('grabbing');
});

exploreContent.addEventListener('mouseup', () => {
    isMouseDown = false;
    exploreContent.classList.remove('grabbing');
});

exploreContent.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - exploreContent.offsetLeft;
    const walk = (x - startX) * 2;
    exploreContent.scrollLeft = scrollLeft - walk;
});
