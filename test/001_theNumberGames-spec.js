const expect = require('chai').expect;
const rewire = require('rewire');

const theNumberGames = rewire('../theNumberGames.js');

describe('multiplyBy3', () => {
    let multiplyBy3 = theNumberGames.__get__("multiplyBy3");

    it('should be a function', () => {
        expect(multiplyBy3).to.be.a('function');
    });

    it('should take an argument and multiply it by 3', () => {
        expect(multiplyBy3(5)).to.equal(15);
    })
});

describe('add', () => {
    let add = theNumberGames.__get__("add");

    it('should be a function', () => {
        expect(add).to.be.a('function');
    });

    it('should take two arguments and add them together', () => {
        expect(add(2, 4)).to.equal(6);
    })

    it('should return a number', () => {
        expect(add(2, 2)).to.be.a('number', 4);
    })
});