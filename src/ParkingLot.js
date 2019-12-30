import { NoCapacityException } from './NoCapacityException'
import { Ticket } from './Ticket'

export class ParkingLot {
  capacity
  parked = 0
  ticketAndParkedCarsMap = new Map()
  constructor(capacity) {
    this.capacity = capacity
  }

  park(car) {
    if (this.parked >= this.capacity) {
      throw new NoCapacityException()
    }

    this.parked += 1
    if (!this.car) {
      this.car = car
    } else {
      this.car2 = car
    }
    const ticket = new Ticket()
    this.ticketAndParkedCarsMap.set(ticket, car)
    return ticket
  }

  retrieve(ticket) {
    return this.ticketAndParkedCarsMap.get(ticket)
    return this.car || this.car2
  }
}
