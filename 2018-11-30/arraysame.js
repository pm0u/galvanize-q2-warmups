var test1 = [1, 2, 3, 4, 5];
var test2 = [3, 4, 7, 8, 9];

console.log(intersection(test1, test2)); // [3,4]

var test3 = [];
console.log(intersection(test1, test3)); // []
console.log(intersection(test2, test3)); // []

function intersection(arr1, arr2) {
  return arr1.reduce((accum, currval) => {
    arr2.includes(currval) ? accum.push(currval) : null
    return accum
  }, [])

}
