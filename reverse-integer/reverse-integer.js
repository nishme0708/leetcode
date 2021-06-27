/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let mul = 1;
    if(x<0) {
        mul = -1;
        x = Math.abs(x);
    }
    let result = 0;
    while(x>0) {
        let rem = x%10;
        result = result * 10 + rem;
        x = (x-rem)/10;
    }
    let left = Math.pow(-2,31);
    let right = Math.pow(2,31) - 1;
    result = result * mul;
    if(result >= left && result <= right) {
        return result;
    }
    return 0;
};