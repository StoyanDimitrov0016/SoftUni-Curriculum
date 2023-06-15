function attachEventsListeners() {
    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', (e) => {
        let container = e.target.parentElement;
        let days = Number(container.querySelector('#days').value);

        hoursButton.parentElement.childNodes[3].value = days * 24;
        minutesButton.parentElement.childNodes[3].value = days * 1440;
        secondsButton.parentElement.childNodes[3].value = days * 86400;
    });

    hoursButton.addEventListener('click', (e) => {
        let container = e.target.parentElement;
        let hours = Number(container.querySelector('#hours').value);

        daysButton.parentElement.childNodes[3].value = hours / 24;
        minutesButton.parentElement.childNodes[3].value = hours * 60;
        secondsButton.parentElement.childNodes[3].value = hours * 3600;
    });

    minutesButton.addEventListener('click', (e) => {
        let container = e.target.parentElement;
        let minutes = Number(container.querySelector('#minutes').value);

        daysButton.parentElement.childNodes[3].value = minutes / 1440;
        hoursButton.parentElement.childNodes[3].value = minutes / 60;
        secondsButton.parentElement.childNodes[3].value = minutes * 60;
    });

    secondsButton.addEventListener('click', (e) => {
        let container = e.target.parentElement;
        let seconds = Number(container.querySelector('#seconds').value);

        daysButton.parentElement.childNodes[3].value = seconds / 86400;
        hoursButton.parentElement.childNodes[3].value = seconds / 3600;
        minutesButton.parentElement.childNodes[3].value = seconds / 60;
    });

}