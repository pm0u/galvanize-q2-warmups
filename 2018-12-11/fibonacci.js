/// fibonacci sequence to nth number
// 1  2  3  4  5  6  7   8  9   10  11  12  13   14   15   16   17   18    19    20    21    22     23
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

const fib1 = function(num, currNum = 0, soFar = []) {
  currNum += 1
  soFar.push((currNum === 2) ? 1 : soFar.slice(-2).reduce((accum, currVal) => accum + currVal, 0))
  return currNum === num ? soFar.pop() : fib1(num, currNum, soFar)
}


console.log(fib1(1))
console.log(fib1(2))
console.log(fib1(5))
console.log(fib1(7))
console.log(fib1(9))
console.log(fib1(19))


const fib2 = function(num) {
  let fib = []
  return fib.reduce(() => {
    fib.push((fib.length === 1) ? 1 : fib.slice(-2).reduce((accum, currNum) => accum + currNum, 0))
    if (num === fib.length) {
      return fib.pop()
    }
  }, 0)
}

console.log('fib2')
console.log(fib2(1))
console.log(fib1(2))
console.log(fib1(5))
console.log(fib1(7))
console.log(fib1(9))
console.log(fib1(19))
