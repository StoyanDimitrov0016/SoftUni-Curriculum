function solve() {
    const info = document.querySelector('div span.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    let nextStationId = 'depot';
    let nextStationName;

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStationId}`;

        fetch(url)
            .then(response => {
                if (response.ok == false) {
                    throw new Error();
                }

                return response.json();
            })
            .then(data => {
                nextStationId = data.next;
                nextStationName = data.name;

                info.textContent = `Next stop ${nextStationName}`;

                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(error => {
                info.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    function arrive() {
        info.textContent = `Arriving at ${nextStationName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

const result = solve();