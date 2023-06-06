/*
You are given a string of n lines, 
each substring being n characters long. 

For example:
s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.
vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 

Task:
  Write these two functions.
  Write high-order function oper(fct, s) where fct is the 
  function of one variable f to apply to the string s.
  (fct will be vertMirror or horMirror)
*/


// Solution

function vertMirror(str) {
  return str.split('\n')
    .map(line => line.split('').reverse().join(''))
    .join('\n')
}
function horMirror(str) {
  return str.split('\n')
    .reverse()
    .join('\n')
}
function oper(fct, s) {
  return fct(s)
}

// or

const vertMirror = s => s.map(s => [...s].reverse().join(''));
const horMirror = s => s.reverse();
const oper = (fct, s) => fct(s.split("\n")).join("\n");