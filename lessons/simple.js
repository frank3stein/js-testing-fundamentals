/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const { sum, subtract } = require('../math')
// Start of the exercise
// let result, expected

// result = sum(4, 5);
// expected = 9;

// if (result !== expected) {
//     throw new Error(`${result} of sum is not expected to be ${expected}`)
// }

// result = subtract(7, 4)
// expected = 3

// if (result !== expected) {
//     throw new Error(`${result} of subtract is not expected to be ${expected}`)
// }
// start of exercise ends
test(`Substraction operation`, () => {
    const result = await subtract(7, 4)
    expect(result).toBe(3)
})

test(`Addition operation`, () => {
    const result = sum(4, 6)
    expect(result).toBe(10)

})

console.log("All tests Pass!")
/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the master branch for the answer.
 */

function test(title, callback) {
    try {
        callback()
        console.log(title)
    } catch (error) {
        console.error(`x ${title}`)
        console.error(error)
    }
}


function expect(value) {
    return {
        toBe(expected) {
            if (value !== expected) {
                throw new Error(`${value} is not expected to be ${expected}`)
            }
        }
    }
}