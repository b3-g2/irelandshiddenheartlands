const exploreContent = document.getElementById('exploreContent');
let isPointerDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

// Mouse events
exploreContent.addEventListener('mousedown', handlePointerDown);
exploreContent.addEventListener('mouseleave', handlePointerUp);
exploreContent.addEventListener('mouseup', handlePointerUp);
exploreContent.addEventListener('mousemove', handlePointerMove);

// Touch events
exploreContent.addEventListener('touchstart', handlePointerDown);
exploreContent.addEventListener('touchend', handlePointerUp);
exploreContent.addEventListener('touchmove', handlePointerMove);

function handlePointerDown(event) {
    isPointerDown = true;
    startX = getPointerX(event);
    startY = getPointerY(event);
    scrollLeft = exploreContent.scrollLeft;
    scrollTop = exploreContent.scrollTop;
    exploreContent.classList.add('grabbing');
}

function handlePointerUp() {
    isPointerDown = false;
    exploreContent.classList.remove('grabbing');
}

function handlePointerMove(event) {
    if (!isPointerDown) return;
    event.preventDefault();
    const x = getPointerX(event);
    const y = getPointerY(event);
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;

    if (Math.abs(walkX) > Math.abs(walkY)) {
        // Horizontal scrolling
        exploreContent.scrollLeft = scrollLeft - walkX;
    } else {
        // Vertical scrolling
        exploreContent.scrollTop = scrollTop - walkY;
    }
}

function getPointerX(event) {
    if (event.type.startsWith('touch')) {
        return event.touches[0].clientX;
    } else {
        return event.pageX;
    }
}

function getPointerY(event) {
    if (event.type.startsWith('touch')) {
        return event.touches[0].clientY;
    } else {
        return event.pageY;
    }
}
