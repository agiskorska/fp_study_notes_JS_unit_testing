const theNumberGames = require('../theNumberGames.js');

describe('multiplyBy3', () => {
    let multiplyBy3 = theNumberGames.multiplyBy3;

    it('should be a function', () => {
        expect(multiplyBy3).toBeDefined();
    });

    it('should take an argument and multiply it by 3', () => {
        expect(multiplyBy3(5)).toEqual(15);
    })
});

describe('add', () => {
    let add = theNumberGames.add;

    it('should be a function', () => {
        expect(add).toBeDefined();
        expect(add).toBeInstanceOf(Function)
    });

    it('should take two arguments and add them together', () => {
        expect(add(2, 4)).toEqual(6);
    })

    it('should return a number', () => {
        const result = add(2, 2)
        expect(result).toEqual(expect.any(Number));
    })
});