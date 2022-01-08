/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x+'';
    let i = 0;
    let j = x.length-1;
    while(i<=j) {
        if(i==j) {
            return true;
        }
        if(x[i]==x[j]){
            i++;j--;
        } else {
            return false;
        }
    } 
    return true;
};