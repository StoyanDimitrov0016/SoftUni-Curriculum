function ticketsManager(ticketsInfo, sortCriterion) {
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
      }
    }
  
    const criteria = {
      destination: (a, b) => a.destination.localeCompare(b.destination),
      price: (a, b) => a.price - b.price,
      status: (a, b) => a.status.localeCompare(b.status)
    };

    const tickets = [];
  
    for (const ticketDesc of ticketsInfo) {
      const [destination, price, status] = ticketDesc.split('|');
      const ticket = new Ticket(destination, price, status);
      tickets.push(ticket);
    }
  
    tickets.sort(criteria[sortCriterion]);
  
    return tickets;
  }
  
  const tickets = ticketsManager(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed'
    ],
    'destination'
  );
  
  console.log(tickets);
  