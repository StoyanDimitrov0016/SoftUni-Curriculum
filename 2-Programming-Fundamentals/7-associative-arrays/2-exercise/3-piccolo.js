function valet(carList) {
    let cars = new Map;

    carList.forEach(car => {
        let [action, carPlate] = car.split(', ');

        if (action == 'IN') {
            cars.set(carPlate, action);
        } else if (action == 'OUT') {
            cars.delete(carPlate);
        }
    });

    let sortedCars = Array.from(cars).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCars.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCars.forEach(car => {
            console.log(car[0]);
        });
    }
}
valet(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);