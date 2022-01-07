/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(arr) {
   if (arr.length == 0 || arr.length == 1) return arr;
    let n = arr.length;
    let max = 0;
    let res = '';
    let table = Array(n).fill().map(() => Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        for (let j = n - i, x = 0, y = x + i; j > 0; j--, x++, y++) {
            if (x == y) {
                table[x][y] = true;
            } else if (arr[x] == arr[y] && (table[x + 1][y - 1] || y - x == 1)) {
                table[x][y] = true;
            }
            let nmax = y - x + 1;
            if (table[x][y] && nmax > max) {
                max = nmax;
                res = arr.slice(x, y + 1);
            }
        }
    }
    return res;
};