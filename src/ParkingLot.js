import { NoCapacityException } from './NoCapacityException'
import { Ticket } from './Ticket'

export class ParkingLot {
  capacity
  parked = 0
  constructor(capacity) {
    this.capacity = capacity
  }

  park(car) {
    if (this.parked >= this.capacity) {
      throw new NoCapacityException()
    }

    this.parked += 1
    this.car = car
    return new Ticket()
  }

  retrieve(ticket) {
    return this.car
  }
}
