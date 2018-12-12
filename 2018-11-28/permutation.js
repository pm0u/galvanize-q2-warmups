function arePermutations(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let result = true
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  while (arr1.length !== 0) {
    let currLetter = arr1.splice(0, 1)
    let index = arr2.indexOf(currLetter[0])
    if (index > -1) {
      arr2.splice(index, 1)
    } else {
      return false
    }
  }
  return result
}


console.log(arePermutations('who', 'how'))
console.log(arePermutations('pianos', 'sniapo'))
console.log(arePermutations('hi', 'no'));


function recursivePermutations(str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let currLetter = arr1.splice(0, 1)
  let index = arr2.indexOf(currLetter[0])
  if (index > -1 && arr1.length === 0) {
    return true
  } else if (index > -1) {
    arr2.splice(index, 1)
    return recursivePermutations(arr1.join(''), arr2.join(''))
  } else {
    return false
  }
}

console.log(recursivePermutations('who', 'how'))
console.log(recursivePermutations('pianos', 'sniapo'))
console.log(recursivePermutations('hi', 'no'));

function permutations(str1,str2) {
}
