// What does this code do?
console.log(decodeString('abcdefg'));
console.log(decodeString('iv'));
console.log(decodeString('LiC'));

function decodeString(input) {

    // set accumulator
    var returnValue = 0;
    // make lowercase
    input = input.toLowerCase();

    for(var i = 0; i < input.length; i++) {
        // return a number based on char
        var v1 = decodeChar(input[i]);
        var v2 = decodeChar(input[i+1]);

        if(v1 < v2) {
            // subtract if lower
            returnValue -= v1;
        }
        else {
            // add if higher
            returnValue += v1;
        }
    }
    return returnValue;
}

function decodeChar(c) {

    if(c === 'i') {
        return 1;
    }

    if(c === 'v') {
        return 5;
    }

    if(c === 'x') {
        return 10;
    }

    if(c === 'l') {
        return 50;
    }

    if(c === 'c') {
        return 100;
    }
}

//converts roman numerals to standard numbers


function romanNumerals (str) {
  const numValues = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100
  }


  return str.toLowerCase().split('').map((accum, currIndex, arr) => {
    numValues[arr[currIndex]] < numValues[arr[currIndex+1]] ? result -= numValues[arr[currIndex]] : result += numValues[arr[currIndex]]
    return result
  }, result=0).pop()
}


function romanNumeralsReduce (str) {
  const numValues = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100
  }

  return str.toLowerCase().split('').reduce((accum, currVal, currIndex, arr) => {
    console.log(arr)
    console.log(currVal)
    console.log(numValues[currVal])
    console.log(numValues[arr[currIndex+1]])
    console.log(numValues[currVal] < numValues[arr[currIndex+1]] )
    return numValues[currVal] < numValues[arr[currIndex+1]] ? -(numValues[arr[currIndex]]) : numValues[currVal]
  }, 0)

}

console.log(romanNumerals('abcdefg'));
console.log(romanNumerals('iv'));
console.log(romanNumerals('LiC'));

console.log('reduce');
console.log(romanNumeralsReduce('abcdefg'));
console.log(romanNumeralsReduce('iv'));
console.log(romanNumeralsReduce('LiC'));
