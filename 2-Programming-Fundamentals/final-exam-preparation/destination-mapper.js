function destinationMapper(text) {
    const validDestinations = [];
    const pattern = /(?<tag>[\/|=])(?<location>[A-Z]{1}[A-Za-z]{2,})(\1)/gm;
    let match;

    while ((match = pattern.exec(text)) != null) {
        const location = match.groups.location;
        validDestinations.push(location);
    }
    const travelPoints = validDestinations.join('').length;

    console.log('Destinations:', validDestinations.join(', '));
    console.log('Travel Points:', travelPoints);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));