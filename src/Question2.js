class Guest {
  age;
  constructor(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

class Ticket {
  guestCount;
  guestAges;
  totalPrice;

  constructor(guests) {
   
      this.guestCount = guests.length;
      let guestAges = [],
        totalPrice = 0;
      for (let i = 0; i < guests.length; i++) {
        if (guests[i].getAge() < 0) {
          throw new Error(`Guest ${i + 1} age is Invalid`);
        }
        guestAges.push(guests[i].getAge());
        totalPrice += this.calculatePrice(guests[i].getAge());
      }
      this.guestAges = guestAges;
      this.totalPrice = totalPrice;
    
  }

  calculatePrice(age) {
    let price;
    if (age >= 0 && age <= 2) {
      price = 0;
    } else if (age > 2 && age < 18) {
      price = 100;
    } else if (age >= 18 && age < 60) {
      price = 500;
    } else {
      price = 300;
    }
    return price;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
  getGuestAges() {
    return this.guestAges;
  }
  getGuestCount() {
    return this.guestCount;
  }
  showTicket() {
    for (let i = 0; i < this.guestCount; i++) {
      console.log(` Guest1 :${i + 1}( Age :${this.guestAges[i]})`);
    }
    console.log(` Total Price :${this.totalPrice}`);
  }
}

class TicketCounter {
  issueTicket(guests) {
    try{
    const ticket = new Ticket(guests);
    console.log("Ticket Issued");
    console.log(
      `Total Guests :${ticket.getGuestCount()} Total Price :${ticket.getTotalPrice()}`
    );
    return ticket;
    }catch(err){
      console.log(err);
    }
  }
}
class TicketChecker {
  checkTicket(ticket) {
    ticket.showTicket();
  }
}
const guests = [
  new Guest(1),
  new Guest(-3),
  new Guest(5),
  new Guest(25),
  new Guest(35),
  new Guest(65),
];
const ticketCounter = new TicketCounter();
const ticket = ticketCounter.issueTicket(guests);
const ticketChecker = new TicketChecker();
ticketChecker.checkTicket(ticket);
