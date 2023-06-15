function carFactory(carInfo) {
    const car = {};

    car.model = carInfo.model;

    let pickedEnginePower = 0;
    let pickedEngineVolume = 0;

    if (carInfo.power <= 90) {
        pickedEnginePower = 90;
        pickedEngineVolume = 1800;
    } else if (carInfo.power <= 120) {
        pickedEnginePower = 120;
        pickedEngineVolume = 2400;
    } else if (carInfo.power <= 200) {
        pickedEnginePower = 200
        pickedEngineVolume = 3500;
    }

    car.engine = {
        power: pickedEnginePower,
        volume: pickedEngineVolume
    }

    car.carriage = {
        type: carInfo.carriage,
        color: carInfo.color
    }

    let correctWheelSize = carInfo.wheelsize;

    if (carInfo.wheelsize % 2 === 0) {
        correctWheelSize--;
    }
    const wheels = [];

    for (let i = 0; i < 4; i++) {
        wheels.push(correctWheelSize);
    }

    car.wheels = wheels;

    return car;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})); 