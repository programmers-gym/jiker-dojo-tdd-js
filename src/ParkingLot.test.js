import { Car } from './Car'
import { InvalidTicketException } from './InvalidTicketException'
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

  it('should retrieve exactly my BMW back when using my ticket given there is some other BMWs in the parking lot', () => {
    const myBMW = new Car('粤B88392')
    const othersBMW = new Car('粤B88888')
    const parkingLot = new ParkingLot(2)

    const ticket = parkingLot.park(myBMW)
    parkingLot.park(othersBMW)
    const retrieved = parkingLot.retrieve(ticket)

    expect(retrieved).toEqual(myBMW)
  })

  it('should throw exception when trying to retrieve through a ticket that is not send out by the system', () => {
    const othersBMW = new Car('粤B88888')
    const someFakedTicket = new Ticket()
    const parkingLot = new ParkingLot(2)

    parkingLot.park(othersBMW)

    expect(() => parkingLot.retrieve(someFakedTicket)).toThrow(
      InvalidTicketException
    )
  })
})
