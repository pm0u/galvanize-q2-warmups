//We want to find the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.
//
//Write a single function that takes one argument. That argument will be an array of credit card numbers. Assume the array can have any number of credit card numbers and each one is a string of digits and dashes. Your function should return the credit card number that has the largest sum of digits.
//
//Here is a sample array of credit card numbers:
//
//
//In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which have the same sum, the function should return the last one with that sum, in this case '4252-278893-7978'


function ccSum(arr) {
  let highest = 0
  let highestVal = 0

  arr.forEach((currVal, index) => {
    const numToSum = currVal.replace(/\-/g, "")
    const currSum = numToSum.split('').reduce((accum, currVal) => accum + parseInt(currVal), 0)
    if (currSum >= highestVal) {
      highest = index
      highestVal = currSum
    }
  })
  return arr[highest]
}

function ccSum2(arr) {
  let indexToReturn = 0
  arr.map((currVal, index) => {
      currVal.match(/\d/g)
        .reduce((accum, currVal, index, arr) => {
          return accum + parseInt(currVal)}, 0)
    })
    .reduce((currHighest, currNum, index, arr) => {
      console.log(arr);
      console.log(Math.max(currHighest, currNum));
      if (currHighest === Math.max(currHighest, currNum)) {
        return currHighest
      } else {
        indexToReturn = index
        return currNum
      }
    })
  return arr[indexToReturn]
}


console.log(ccSum(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']))
console.log(ccSum(['5865-2600-5889-0555', '4779-598666-3666', '4252-278553-7978', '4556-4242-9283-2260']));

console.log('second function');

console.log(ccSum2(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']))
console.log(ccSum2(['5865-2600-5889-0555', '4779-598666-3666', '4252-278553-7978', '4556-4242-9283-2260']));
