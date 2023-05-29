/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if(palindrome.length < 2) return '';
    let arr = palindrome.split('');
    for(let i =0;i<Math.floor(arr.length/2);i++) {
        if(arr[i] != 'a') {
            arr[i] = 'a';
            return arr.join('');
        }
    }
    arr[arr.length-1] = 'b';
    return arr.join('')
};