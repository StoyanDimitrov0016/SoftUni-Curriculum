function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');

    stopName.innerHTML = '';
    buses.innerHTML = '';

    fetch(url)
        .then(response => {
            if (response.ok == false) {
                throw new Error();
            }

            return response.json()
        })
        .then(data => {
            stopName.textContent = data.name;

            for (const key in data.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
                buses.appendChild(li);
            }
        })
        .catch(error => {
            stopName.textContent = 'Error';
        })
}