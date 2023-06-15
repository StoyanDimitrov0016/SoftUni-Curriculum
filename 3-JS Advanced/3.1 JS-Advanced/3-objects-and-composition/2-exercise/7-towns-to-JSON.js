function townObjToJSON(town) {

    const towns = [];
    town.shift();
    for (const line of town) {
        let [town, latitude, longitude] = line.split(/\s?\|\s?/).slice(1);

        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        const currentTown = { Town: town, Latitude: latitude, Longitude: longitude };

        towns.push(currentTown);
    }

    console.log(JSON.stringify(towns));
}
townObjToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
townObjToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])