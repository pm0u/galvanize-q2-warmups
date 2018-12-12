function isPalindrome (str) {
  return str.split('').reverse().join('') === str
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('tacocat'));

function isPalindrome2 (str) {
  for (let i in str) {
    if (str[i] !== str.slice(-(parseInt(i)+1))[0]) {
      return false
    }
  }
  return true
}
console.log('number 2');
console.log(isPalindrome2('hello'))
console.log(isPalindrome2('tacocat'));
console.log(isPalindrome2('hi ih'))
