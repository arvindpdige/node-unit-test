describe("basic test", () => {
  test("it is a very basic test", () => {
    expect(1).toBe(1);
  });
});

describe("01 - Basics", () => {
  it("callback passing test", (done) => {
    setImmediate(done);
  });

  describe("a nested suite", () => {
    it("should work also", () => {
      expect(3).toBe(3);
    });
  });
});
