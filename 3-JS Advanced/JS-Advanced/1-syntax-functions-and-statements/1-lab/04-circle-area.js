function circleArea(input) {
    if (typeof input === "number") {
        const radius = input;
        const area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}`);
    }
}
circleArea(5);
circleArea('5');
circleArea(true);
circleArea(false);
circleArea([1, 2, 3]);
circleArea({ '1': 10 });