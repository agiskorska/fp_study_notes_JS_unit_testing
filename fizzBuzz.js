const fizzBuzz = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        const arr = []
        for(let i = 1; i <= 100; i++) {
            if (i % a === 0 && i % b === 0) {
                arr.push("FizzBuzz") 
            }
            else if (i % a == 0) {
                arr.push("Fizz") 
            }
            else if (i % b == 0) {
                arr.push("Buzz") 
            } else {
                arr.push(i) 
            }
        }
        return arr
    } else {
        throw "Error: all inputs should be numbers"
    }
}
fizzBuzz(3,5)
module.exports = fizzBuzz