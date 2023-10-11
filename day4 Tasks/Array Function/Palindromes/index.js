const strings = ["racecar", "hello", "level", "world"];
const isPalindrome = str => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};
const palindromes = strings.filter(str => isPalindrome(str));
console.log(palindromes);
