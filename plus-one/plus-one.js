/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
  for(let i =digits.length-1;i>=0;i--) {
      let digit = digits[i];
      if(digit == 9) {
          carry = 1;
          digits[i] = 0;
      } else {
          digits[i] = digit+1;
          
          return digits;
      }       
  }
  return [1].concat(digits);
};