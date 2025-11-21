import { add } from "../src/math.js";

describe("math", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
