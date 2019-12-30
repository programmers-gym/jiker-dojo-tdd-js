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
    return this.ticketAndParkedCarsMap.get(ticket)
  }
}
