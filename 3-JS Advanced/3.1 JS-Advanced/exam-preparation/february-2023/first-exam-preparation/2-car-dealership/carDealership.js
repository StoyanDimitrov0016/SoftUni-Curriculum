class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '') {
            throw new Error('Invalid input!');
        }
        if (Number.isInteger(horsepower) && horsepower < 0) {
            throw new Error('Invalid input!');
        }
        if (price < 0) {
            throw new Error('Invalid input!');
        }
        if (mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;

    }

    sellCar(model, desiredMileage) {
        const modelIndex = this.availableCars.findIndex(m => m.model == model);

        if (modelIndex == -1) {
            throw new Error(`${model} was not found!`);
        }

        const wantedModel = this.availableCars[modelIndex];

        const actualMilage = wantedModel.mileage;
        let soldPrice = wantedModel.price;

        if (actualMilage - desiredMileage > 0 && actualMilage - desiredMileage <= 40_000) {
            soldPrice *= 0.95;

        } else if (actualMilage - desiredMileage > 40_000) {
            soldPrice *= 0.90;
        }

        this.availableCars.splice(modelIndex, 1);

        this.soldCars.push({
            model: wantedModel.model,
            horsepower: wantedModel.horsepower,
            soldPrice
        })

        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        const carInStock = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);

        if (carInStock.length == 0) {
            return 'There are no available cars';
        }

        return ['-Available cars:', carInStock.join('\n')].join('\n');
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
    
        let sorted;
    
        if (criteria === 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
    
        const soldCarsForMessage = sorted.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
    
        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            ...soldCarsForMessage
        ].join('\n');
    }
    
}

const dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));