import { NoCapacityException } from './NoCapacityException'
import { Ticket } from './Ticket'

export class ParkingLot {
  capacity
  parked = 0
  constructor(capacity) {
    this.capacity = capacity
  }

  park(car) {
    if (this.capacity === 0 || this.parked === 1) {
      throw new NoCapacityException()
    }

    this.parked += 1
    return new Ticket()
  }
}
