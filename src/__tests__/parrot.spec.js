//import { Parrot,  } from '../parrot';
var Parrots = require('../parrot')

describe("Parrot", function () {
    test("get speed of european parrot", function () {
        const europeanParrot = new Parrots.European();
        expect(europeanParrot.getSpeed()).toBe(12);
    });

    test("get speed of african parrot with one coconut", function () {
        const africanParrot = new Parrots.African(1);
        expect(africanParrot.getSpeed()).toBe(3);
    });

    test("get speed of african parrot with two coconuts", function () {
        const africanParrot = new Parrots.African(2);
        expect(africanParrot.getSpeed()).toBe(0);
    });

    test("get speed of african parrot with no coconuts", function () {
        const africanParrot = new Parrots.African(0);
        expect(africanParrot.getSpeed()).toBe(12);
    });

    test("get speed norwegian blue parrot nailed", function () {
        //const parrot = new Parrot(PARROT_TYPES.NORWEGIAN_BLUE, 0, 1.5, true);
        const norwegianParrot = new Parrots.Norwegian_Blue(1.5, true);
        expect(norwegianParrot.getSpeed()).toBe(0);
    });

    test("get speed norwegian blue parrot not nailed", function () {
        const norwegianParrot = new Parrots.Norwegian_Blue(1.5, false);
        expect(norwegianParrot.getSpeed()).toBe(18);
    });

    test("get speed norwegian blue parrot not nailed high voltage", function () {
        const norwegianParrot = new Parrots.Norwegian_Blue(4, false);
        expect(norwegianParrot.getSpeed()).toBe(24);
    });
});