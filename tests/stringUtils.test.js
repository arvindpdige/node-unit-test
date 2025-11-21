const { reverse, isPalindrome } = require("../src/stringUtils");

describe("stringUtils tests", () => {
  test("reverse should reverse a string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  test("reverse should return empty string for non-strings", () => {
    expect(reverse(123)).toBe("");
    expect(reverse(null)).toBe("");
  });

  test("isPalindrome should detect palindromes", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("isPalindrome should ignore non-alphanumeric characters", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("isPalindrome should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("isPalindrome should return false for non-strings", () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
  });
});
