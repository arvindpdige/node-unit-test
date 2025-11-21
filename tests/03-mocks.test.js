// 03-mocks.test.js (Jest version)

describe("03 - Mocks", () => {
  test("stub and spies on a function", () => {
    const calculationService = {
      calculate: (a, b) => a + b,
    };

    // --- Jest mock replacement ---
    const mockFn = jest.fn((a, b) => a * b);

    // Replace the real method with the mock
    calculationService.calculate = mockFn;

    // Assertions
    expect(calculationService.calculate(3, 2)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Check call details
    const call = mockFn.mock.calls[0];
    expect(call).toEqual([3, 2]);

    // result() and error() equivalents
    const result = mockFn.mock.results[0];

    expect(result.type).toBe("return");     // Jest uses type: 'return'
    expect(result.value).toBe(6);           // Returned value
  });
});
