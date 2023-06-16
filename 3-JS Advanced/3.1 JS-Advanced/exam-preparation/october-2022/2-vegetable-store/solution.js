class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const addedVegetables = [];

        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const indexOfExistedVeggie = this.availableProducts.findIndex(v => v.type == type);

            if (indexOfExistedVeggie !== -1) {
                const existVegetable = this.availableProducts[indexOfExistedVeggie];
                existVegetable.quantity += quantity;

                if (existVegetable.price < price) {
                    existVegetable.price = price;
                }
            } else {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                })
            }

            if (!addedVegetables.includes(type)) {
                addedVegetables.push(type);
            }
        }

        return `Successfully added ${addedVegetables.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            const indexOfExistedVeggie = this.availableProducts.findIndex(v => v.type == type);

            if (indexOfExistedVeggie == -1) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            const vegetable = this.availableProducts[indexOfExistedVeggie];

            if (quantity > vegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += vegetable.price * quantity;
            vegetable.quantity -= quantity;

        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const indexOfExistedVeggie = this.availableProducts.findIndex(v => v.type == type);

        if (indexOfExistedVeggie == -1) {
            throw new Error(`${type} is not available in the store.`);
        }

        const vegetable = this.availableProducts[indexOfExistedVeggie];

        if (quantity > vegetable.quantity) {
            vegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        vegetable.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        const firstLine = 'Available vegetables:';
        const secondLine = this.availableProducts.sort((a, b) => a.price - b.price).map(v => `${v.type}-${v.quantity}-$${v.price}`);
        const thirdLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return [firstLine, secondLine.join('\n'), thirdLine].join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
