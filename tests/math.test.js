const { add, subtract, multiply, divide } = require("../src/math");

test("add works", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract works", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply works", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("divide works", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide throws on zero", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by 0");
});
