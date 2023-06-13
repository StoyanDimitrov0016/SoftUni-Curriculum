function computerStore(input) {
    let totalWithoutTax = 0;
    while (isNaN(input[0]) == false) {
        const computerPartPrice = Number(input.shift());

        if (computerPartPrice < 0) {
            console.log('Invalid price!');
        } else {
            totalWithoutTax += computerPartPrice;
        }
    }

    const tax = totalWithoutTax * 0.2;
    let totalWithTax = totalWithoutTax + tax;

    if (input[0] == 'special') {
        totalWithTax *= 0.9;
    }
    if (totalWithTax > 0) {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalWithTax.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);