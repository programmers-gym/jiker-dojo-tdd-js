
import Calculator from "./Calculator"

describe("Calculator", () => {
    it("should equal to 2 when add 1 and 1", () => {
        const calculator = new Calculator()

        const result = calculator.add(1, 1)

        expect(result).toBe(2)
    })
});
