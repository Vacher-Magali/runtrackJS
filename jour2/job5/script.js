function updateFooterColor() {

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    const scrollPercentage = (scrollPosition / scrollHeight) * 100;

    const footer = document.querySelector('footer');

    const red = Math.min(255, Math.floor(scrollPercentage * 2.55)); 
    const green = 255 - red;
    footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`; 
}

window.addEventListener('scroll', updateFooterColor);
