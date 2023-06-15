function foodInfoObject(array) {
    const foodList = {};

    for (let i = 0; i < array.length; i += 2) {
        const food = array[i];
        const calories = array[i + 1];
        foodList[food] = Number(calories);
    }

    console.log(foodList);
}
foodInfoObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);