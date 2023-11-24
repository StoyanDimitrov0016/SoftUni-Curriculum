function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);
    let apartmentRent = 0;
    let studioRent = 0;
    switch (month) {
        case "May":
        case "October":
            apartmentRent = 65;
            studioRent = 50;
            break;
        case "June":
        case "September":
            apartmentRent = 68.70;
            studioRent = 75.20;
            break;
        case "July":
        case "August":
            apartmentRent = 77;
            studioRent = 76;
            break;
    }

    if ((7 < nightCount && nightCount <= 14) && (month === "May" || month === "October")) {
        studioRent = studioRent * 0.95;
    } else if (14 < nightCount && (month === "May" || month === "October")) {
        studioRent = studioRent * 0.7;
    } else if (14 < nightCount && (month === "June" || month === "September")) {
        studioRent = studioRent * 0.8;
    }
    if (14 < nightCount) {
        apartmentRent = apartmentRent * 0.9;
    }

    console.log(`Apartment: ${(apartmentRent * nightCount).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioRent * nightCount).toFixed(2)} lv.`);

}
hotelRoom(["May", "15"]);