// A simple utility for string operations

function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

module.exports = {
  reverse,
  isPalindrome
};
