function rectangle(width, height, color) {
    const correctColor = color[0].toUpperCase().concat(color.substring(1));
    const rect = {
        width,
        height,
        color: correctColor,
        calcArea: () => height * width
    };

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());