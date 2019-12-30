import { NoCapacityException } from './NoCapacityException'
import { Ticket } from './Ticket'

export class ParkingLot {
  capacity
  constructor(capacity) {
    this.capacity = capacity
  }

  park(car) {
    if (this.capacity === 0) {
      throw new NoCapacityException()
    }

    return new Ticket()
  }
}
