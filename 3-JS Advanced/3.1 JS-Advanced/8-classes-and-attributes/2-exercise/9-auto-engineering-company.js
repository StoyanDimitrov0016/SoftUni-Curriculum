function carCompany(carsInfo) {
    const carRegister = {};

    for (const car of carsInfo) {
        let [brand, model, quantity] = car.split(' | ');
        quantity = Number(quantity);

        if (!carRegister[brand]) {
            carRegister[brand] = {};
        }

        if (!carRegister[brand][model]) {
            carRegister[brand][model] = 0;
        }

        carRegister[brand][model] += quantity;
    }

    for (const carBrand in carRegister) {
        console.log(carBrand);

        const carModels = Object.entries(carRegister[carBrand]);

        for (const [model, producedCars] of carModels) {
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}


carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])
