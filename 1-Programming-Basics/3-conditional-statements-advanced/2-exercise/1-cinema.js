function cinemaTickets(input) {
    let ticketType = input[0];
    let rows = input[1];
    let columns = input[2];
    let ticketPrice = 0;

    if (ticketType === "Premiere") {
        ticketPrice = 12;
    } else if (ticketType === "Normal") {
        ticketPrice = 7.5;
    } else {
        ticketPrice = 5;
    }
    let sumWhenRoomIsFull = rows * columns * ticketPrice;
    console.log( (sumWhenRoomIsFull).toFixed(2) );

}
cinemaTickets(["Premiere","10","12"]);
