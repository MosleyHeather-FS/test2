const {add, subtract, multiply, divide, squareRoot, max} = require("./math");

describe("Testing the math module", () => {

    test("should add integers", () => {
        expect(add(2, 4)).toBe(6);
    });

    test("should subtract", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test("should divide", () => {
        expect(divide(558, 6)).toBe(93);
    });
    test("should multiply", () => {
        expect(multiply(12, 11)).toBe(132);
    });
    test("should show square root", () => {
        expect(squareRoot(625)).toBe(25);
    });
    test("should show max", () => {
        expect(max(2, 1)).toBe(2);
    });
});