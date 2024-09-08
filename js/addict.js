document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let hue = 0;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const updateCursorPosition = () => {
        // Smoothly interpolate cursor position
        const cursorX = parseFloat(cursor.style.left) || 0;
        const cursorY = parseFloat(cursor.style.top) || 0;
        const speed = 0.1; // Adjust speed to control smoothness

        cursor.style.left = `${cursorX + (mouseX - cursorX) * speed}px`;
        cursor.style.top = `${cursorY + (mouseY - cursorY) * speed}px`;

        requestAnimationFrame(updateCursorPosition);
    };

    const updateHue = () => {
        hue = (hue + 1) % 360;
        cursor.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        requestAnimationFrame(updateHue);
    };

    updateCursorPosition();
    updateHue();
});



const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});