function validOrNotDistance(x1, y1, x2, y2) {
    const distanceOnesToZero = Math.sqrt(x1 ** 2 + y1 ** 2);
    const distanceTwosToZero = Math.sqrt(x2 ** 2 + y2 ** 2);
    const distanceToEachOther = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    //A distance between two points in Cartesian coordinate system (0, 0) is considered valid if it is an integer value

    if (distanceOnesToZero % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (distanceTwosToZero % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (distanceToEachOther % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
solve(2, 1, 1, 1);