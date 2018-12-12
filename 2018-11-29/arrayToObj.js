var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

console.log(bookData(books))
console.log(bookData2(books))
////-> {
//"1934356360": {
//"title": "Learn to Program",
//"author": "Chris Pine",
//"isbn10": 1934356360
//},
//"1593275846": {
//"title": "Eloquent Javascript",
//"author": "Marijn Haverbeke",
//"isbn10": 1593275846
//}
//}

function bookData (books) {
  let result ={}
  return books.forEach((arr) => result[arr[2]] = { title: arr[0], author: arr[1], isbn10: arr[2] })) || result
}

function bookData2 (books) {
  return books.reduce((accum, arr) => {
    accum[arr[2]] = { title: arr[0], author: arr[1], isbn10: arr[2] }
    return accum
  }, {})
}


//function bookData2 (books) {
//  return books.reduce((accum, arr) =>  !(accum[arr[2]] = { title: arr[0], author: arr[1], isbn10: arr[2] }) || accum, {})
//}
