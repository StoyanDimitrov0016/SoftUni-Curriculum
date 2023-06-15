function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', onMouseOver);
    const resultElement = document.getElementById('result');

    function onMouseOver(event) {
        const percentage = Math.floor(event.offsetX / gradientElement.clientWidth * 100);
        resultElement.textContent = percentage + '%';
    }
}