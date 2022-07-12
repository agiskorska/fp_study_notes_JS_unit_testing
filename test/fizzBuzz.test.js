const fizzBuzz = require('../fizzBuzz.js')


describe("fizzBuzz", () => {
    test("It should be a function", () => {
        expect(typeof fizzBuzz).toBe("function")
    })

    test("It should retun a string", () => {
        const answer = fizzBuzz(2,3)
        expect(answer).toEqual(expect.arrayContaining(["Fizz", 5, "Buzz"]))
    })
    test("It should retun a string", () => {
        const answer = fizzBuzz(2,3)
        expect(answer).toEqual(expect.not.arrayContaining([4, 6]))
    })
    test("It should retun a string", () => {
        const answer = fizzBuzz(0.2,0.3)
        expect(answer).toEqual(expect.arrayContaining([4, 6]))
    })
    describe("It reports invalid input", () =>{
        expect(() => {
            fizzBuzz('1', '2')
        }).toThrow("Error: all inputs should be numbers")
    })
})