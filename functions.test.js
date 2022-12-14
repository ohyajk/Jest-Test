const functions = require('./functions.js')

test('Add 3 + 2 equal to 4', () => {
    expect(functions.add(2 , 2)).toBe(4)
})