function fruitCalculator(fruit, grams, pricePerKg) {
    const fruitWeightInKg = grams / 1000;
    const totalSum = fruitWeightInKg * pricePerKg;
    console.log(`I need $${totalSum.toFixed(2)} to buy ${fruitWeightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruitCalculator('orange', 2500, 1.80);
