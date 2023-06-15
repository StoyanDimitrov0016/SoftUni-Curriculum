class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        //check it there is enough space
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        //reduce the available space 
        this.spaceAvailable -= spaceRequired;

        //add the plant in plants
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        //return a message
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        //check if quantity is valid
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        const plant = this.plants.find(p => p.plantName == plantName);

        //check if there is a plant with this name
        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        //check if the plant is already ripen
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        //set ripe and quantity properties 
        plant.ripe = true;
        plant.quantity = quantity;

        //return a different message for successful ripen the plant depending on the quantity
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        // Check if there is a plant with this name
        const plantIndex = this.plants.findIndex(p => p.plantName === plantName);

        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        const plant = this.plants[plantIndex];

        // Check if the plant is ready to be harvested (it has to be ripe)
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        // Remove the plant from the plants array and restoring the free space which this plant had taken
        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += plant.spaceRequired;

        // Transfer the harvested plant to the storage
        this.storage.push({
            plantName: plant.plantName,
            quantity: plant.quantity
        });

        // Return a success message
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        const firstLine = `The garden has ${this.spaceAvailable} free space left.`;

        const plantsInPlantsArr = this.plants.map(p => p.plantName)
            .sort((a, b) => a.localeCompare(b));

        const secondLine = `Plants in the garden: ${plantsInPlantsArr.join(', ')}`;

        const plantsInStorageArr = this.storage.map(p => `${p.plantName} (${p.quantity})`);

        let thirdLine = `Plants in storage: `;

        if (plantsInStorageArr.length == 0) {
            thirdLine += 'The storage is empty.';
        } else {
            thirdLine += `${plantsInStorageArr.join(', ')}`;
        }

        return [
            firstLine,
            secondLine,
            thirdLine].join('\n');
    }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
