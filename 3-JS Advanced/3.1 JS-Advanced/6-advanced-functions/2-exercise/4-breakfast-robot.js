function breakfastRobot() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const commands = {
        restock,
        prepare,
        report
    }

    function manager(line) {
        const [command, product, quantity] = line.split(' ');
        return commands[command](product, quantity);
    }

    return manager;

    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        const requiredIngredients = { ...recipes[recipe] };

        for (const ingredient in requiredIngredients) {
            const requiredQuantity = requiredIngredients[ingredient] * quantity;

            if (ingredients[ingredient] < requiredQuantity) {
                return `Error: not enough ${ingredient} in stock`;
            }

            ingredients[ingredient] -= requiredQuantity;
        }

        return 'Success';
    }


    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
    }
}
let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));