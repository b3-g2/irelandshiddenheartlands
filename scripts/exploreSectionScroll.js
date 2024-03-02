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

    const x = getPointerX(event);
    const y = getPointerY(event);
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;

    // Determine whether the user is predominantly scrolling horizontally or vertically
    const isHorizontalScroll = Math.abs(walkX) > Math.abs(walkY);

    if (isHorizontalScroll) {
        // Horizontal scrolling
        event.preventDefault(); // Prevent default horizontal scrolling behavior
        exploreContent.scrollLeft = scrollLeft - walkX;
    } else {
        // Vertical scrolling
        // Allow default vertical scrolling behavior
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
