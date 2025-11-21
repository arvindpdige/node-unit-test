// basic.test.js (Jest version)

describe("basic test", () => {
  test("it is a very basic test", () => {
    expect(1).toBe(1);
  });
});

// You can also define a test suite using "describe"
describe("01 - Basics", () => {
  // "it" is an alias for test()
  it("callback passing test", (done) => {
    setImmediate(done);
  });

  // nesting test suites is allowed
  describe("a nested suite", () => {
    it("should work also", () => {
      expect(3).toBe(3);
    });
  });
});
