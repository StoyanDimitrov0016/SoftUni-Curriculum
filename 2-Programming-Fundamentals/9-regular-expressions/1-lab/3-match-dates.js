function findValidDates(datesList) {
    const pattern = /(?<days>\d{2})(?<separator>[\.\-/])(?<month>[A-Z][a-z]{2})\2(?<years>\d{4})/g
    let match = pattern.exec(datesList);

    while (match) {
        const day = match.groups.days;
        const month = match.groups.month;
        const year = match.groups.years;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(datesList);
    }
}