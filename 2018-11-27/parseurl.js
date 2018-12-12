// Query strings are often used to pass data from one “page” to another, through the URL. The query string is a list of key-value pairs at the end of a URL. The query string always starts with a ?, and the key-value pairs are separated by &’s. Take a look at the following examples:
//
// http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA
//
// http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week
//
// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:

console.log(parseQueryString('http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA'))

//=> {find_desc: “tacos”, find_loc: “San+FranciscoCA”}

console.log(parseQueryString('http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week'))

//=> {q: “dogs”, sort: “top”, t: “week”}


function parseQueryString(url) {
  const regex = new RegExp(/[&?](\w*)=(\w*)/g)
  let obj = {}
  while ( (match = regex.exec(url)) != null) {
    obj[match[1]] = match[2]
  }
  return obj
}
