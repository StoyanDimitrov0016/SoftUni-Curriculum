function conversionFromObjToJSON(name, lastName, hairColor) {
    let personInfo = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(personInfo));
}