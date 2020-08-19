

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
test(`Substraction operation`, async () => {
    const result = await subtract(7, 4)
    expect(result).toBe(3)
})

test(`Addition operation`, async () => {
    const result = await sum(4, 6)
    expect(result).toBe(10)

})


async function test(title, callback) {
    try {
        await callback()
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
