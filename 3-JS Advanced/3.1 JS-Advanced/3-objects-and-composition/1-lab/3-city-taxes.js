function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate; },
        applyGrowth(percentage) { this.population += Math.floor(population * (percentage / 100)) },
        applyRecession(percentage) { this.treasury -= Math.floor(this.treasury * (percentage / 100)) }
    }
    return city;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);