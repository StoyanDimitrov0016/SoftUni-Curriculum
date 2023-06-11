function conversionFromJSONtoObj(inputInJSON) {
    for (const key of Object.keys(JSON.parse(inputInJSON))) {
        console.log(`${key}: ${JSON.parse(inputInJSON)[key]}`);
    }
}