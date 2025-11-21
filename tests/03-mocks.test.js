describe("03 - Mocks", () => {
  test("stub and spies on a function", () => {
    const calculationService = {
      calculate: (a, b) => a + b,
    };

    const mockFn = jest.fn((a, b) => a * b);

    calculationService.calculate = mockFn;

    expect(calculationService.calculate(3, 2)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(1);

    const call = mockFn.mock.calls[0];
    expect(call).toEqual([3, 2]);

    const result = mockFn.mock.results[0];

    expect(result.type).toBe("return");
    expect(result.value).toBe(6);
  });
});
