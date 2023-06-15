function findLowestPrices(data) {
    const products = {};

    for (const line of data) {

        const [town, product, price] = line.split(" | ");

        if (!products[product]) {
            products[product] = { price: Number(price), town };
        }

        if (Number(price) < products[product].price) {
            products[product] = { price: Number(price), town };
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
findLowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])