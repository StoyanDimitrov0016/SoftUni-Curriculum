function storeCatalogue(array) {
    const productList = {};

    for (const line of array) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        productList[product] = price;
    }

    const alphaSortedProducts = Object
        .entries(productList)
        .sort((a, b) => a[0].localeCompare(b[0]));

    const startingLetters = [];

    for (let element of alphaSortedProducts) {
        if (startingLetters.includes(element[0][0]) == false) {
            startingLetters.push(element[0][0]);
        }
    }

    for (const letter of startingLetters) {
        console.log(letter);
        for (const product of alphaSortedProducts) {
            if (product[0][0] === letter) {
                console.log(` ${product[0]}: ${product[1]}`);
            }
        }
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);