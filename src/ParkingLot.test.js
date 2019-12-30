import { Car } from './Car'
import { NoCapacityException } from './NoCapacityException'
import { ParkingLot } from './ParkingLot'
import { Ticket } from './Ticket'

describe('ParkingLot', () => {
  it('should return a ticket when parking my car given there is available spaces in the parking lot', () => {
    const myBMW = new Car('粤B88392')

    const ticket = new ParkingLot().park(myBMW)

    expect(ticket).toBeInstanceOf(Ticket)
  })

  it('should throw exception when parking a car given parking lot is out of capacity', () => {
    const someonesBenz = new Car('粤B22891')
    const myBMW = new Car('粤B88392')
    const parkingLot = new ParkingLot(1)

    parkingLot.park(someonesBenz)
    expect(() => {
      parkingLot.park(myBMW)
    }).toThrow(NoCapacityException)
  })

  it('should be able to retrieve my BMW back when using the ticket returned when parking', () => {
    const myBMW = new Car('粤B88392')
    const parkingLot = new ParkingLot(1)

    const ticket = parkingLot.park(myBMW)
    const retrieved = parkingLot.retrieve(ticket)

    expect(retrieved).toEqual(myBMW)
  })
})
