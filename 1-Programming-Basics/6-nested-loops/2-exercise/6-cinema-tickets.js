function tickets(input) {
    let index = 0;
    let command = input[index];
    let totalTickets = 0;
    let standardTicketCount = 0;
    let studentTicketCount = 0;
    let kidTicketCount = 0;
    while (command !== "Finish") {
        let ticketsPerFilm = 0;
        let filmName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        while (ticketType !== "End") {
            totalTickets++;
            ticketsPerFilm++;
            switch (ticketType) {
                case "standard": standardTicketCount++; break;
                case "student": studentTicketCount++; break;
                case "kid": kidTicketCount++; break;
            }
            if (ticketsPerFilm >= freeSeats) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        console.log(`${filmName} - ${(ticketsPerFilm / freeSeats * 100).toFixed(2)}% full.`);
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets} `);
    console.log(`${(studentTicketCount / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCount / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketCount / totalTickets * 100).toFixed(2)}% kids tickets.`);
}