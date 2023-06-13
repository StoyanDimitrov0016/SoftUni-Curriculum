function speedCalculator(speed, areaType) {
    let status = '';

    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (speedLimits[areaType] >= speed) {
        return `Driving ${speed} km/h in a ${speedLimits[areaType]} zone`;
    } else {

        if (speed <= speedLimits[areaType] + 20) {
            status = 'speeding';
        } else if (speed <= speedLimits[areaType] + 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        return `The speed is ${speed - speedLimits[areaType]} km/h faster than the allowed speed of ${speedLimits[areaType]} - ${status}`;
    }
}
console.log(speedCalculator(40, 'city'));
console.log(speedCalculator(21, 'residential'));
console.log(speedCalculator(120, 'interstate'));
console.log(speedCalculator(200, 'motorway'));