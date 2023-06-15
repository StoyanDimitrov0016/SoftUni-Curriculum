function lockedProfile() {
    document.querySelector('#main').addEventListener('click', (e) => {
        const targetElement = e.target;

        if (targetElement.tagName === 'BUTTON') {
            const unlockButton = targetElement.parentElement.querySelectorAll('input')[1];
            const additionalInfo = targetElement.parentElement.querySelector('div.profile div');

            if (targetElement.textContent === 'Show more' && unlockButton.checked) {
                additionalInfo.style.display = 'inline';
                targetElement.textContent = 'Hide it';
            } else if (targetElement.textContent === 'Hide it' && unlockButton.checked) {
                additionalInfo.style.display = 'none';
                targetElement.textContent = 'Show more';
            }
        }
    });
}