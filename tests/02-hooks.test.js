// 02-hooks.test.js (Jest version)

const hooksPassed = [];

describe("02 - Hooks", () => {
  beforeAll(() => {
    hooksPassed.push("I'm running once before all tests in this suite");
  });

  beforeEach(() => {
    hooksPassed.push("I'm running before each tests");
  });

  afterAll(() => {
    hooksPassed.push("I'm running once after all tests in this suite");
  });

  afterEach(() => {
    hooksPassed.push("I'm running after each tests");
  });

  test("a test", () => {
    expect(1).toBe(1);
  });

  test("another test", () => {
    expect(1).toBe(1);
  });
});

test("check hooks passed", () => {
  expect(hooksPassed).toEqual([
    "I'm running once before all tests in this suite",
    "I'm running before each tests",
    "I'm running after each tests",
    "I'm running before each tests",
    "I'm running after each tests",
    "I'm running once after all tests in this suite",
  ]);
});
