import { InvalidTicketException } from './InvalidTicketException'
import { NoCapacityException } from './NoCapacityException'
import { Ticket } from './Ticket'

export class ParkingLot {
  capacity
  ticketAndParkedCarsMap = new Map()
  constructor(capacity) {
    this.capacity = capacity
  }

  park(car) {
    if (this.ticketAndParkedCarsMap.size >= this.capacity) {
      throw new NoCapacityException()
    }

    const ticket = new Ticket()
    this.ticketAndParkedCarsMap.set(ticket, car)
    return ticket
  }

  retrieve(ticket) {
    if (!this.ticketAndParkedCarsMap.has(ticket)) {
      throw new InvalidTicketException()
    }

    const car = this.ticketAndParkedCarsMap.get(ticket)
    this.ticketAndParkedCarsMap.delete(ticket)
    return car
  }
}
