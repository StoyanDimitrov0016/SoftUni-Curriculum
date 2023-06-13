function adAstra(input) {
    // Get the input text and initialize variables
    const text = input[0];
    let totalCalories = 0;
    const foods = [];

    // Define the regular expression pattern and find matches in the input text
    const pattern = /(?<tag>[#\|])(?<food>[A-Za-z\s]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<calories>\d{1,5})\1/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        const foodName = match.groups.food;
        const expirationDate = match.groups.date;
        const calories = match.groups.calories;

        totalCalories += Number(calories);

        foods.push({ foodName, expirationDate, calories });
    }

    // Output the total days of food and the food information
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    foods.forEach(food => {
        console.log(`Item: ${food.foodName}, Best before: ${food.expirationDate}, Nutrition: ${food.calories}`);
    });
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);