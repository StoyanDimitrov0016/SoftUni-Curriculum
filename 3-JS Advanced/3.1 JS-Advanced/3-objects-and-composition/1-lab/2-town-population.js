function cityPopulation(citiesInfo) {
    const cities = {};
    for (const city of citiesInfo) {
        let [name, population] = city.split(' <-> ');
        population = Number(population);
        if (cities[name]) {
            cities[name] += population;
        } else {
            cities[name] = population;
        }
    }
    for (const [name, population] of Object.entries(cities)) {
        console.log(`${name} : ${population}`);
    }
}
cityPopulation(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']);