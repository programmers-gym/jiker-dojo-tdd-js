import { Car } from './Car'
import { ParkingLot } from './ParkingLot'
import { Ticket } from './Ticket'

describe('ParkingLot', () => {
  it('should return a ticket when parking my car given there is available spaces in the parking lot', () => {
    const myBMW = new Car('粤B88392')
    const ticket = new ParkingLot().park(myBMW)

    expect(ticket).toBeInstanceOf(Ticket)
  })
})
