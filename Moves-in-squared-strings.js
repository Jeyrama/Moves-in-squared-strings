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