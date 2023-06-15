function notify(message) {
    const div = document.querySelector('#notification');
    div.style.display = 'block';
    div.textContent = message;

    div.addEventListener('click', (e) => {
        div.style.display = 'none';
    });
}