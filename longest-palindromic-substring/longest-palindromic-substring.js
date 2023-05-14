/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  
  let n = s.length;
  if(n==1 || n==0) {
      return s;
  }
  let table = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let max = '';
  for (let i = 0; i < n; i++) {
    table[i][i] = 1;
    if(!max) {
        max = s[i];
    }
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] == s[i + 1]) {
      table[i][i + 1] = 1;
      if(2 > max.length) {
            max = s.substring(i,i+2);
      }
    }
  }
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      let j = i + k - 1;
      if(s[i] == s[j] && table[i+1][j-1]) {
        table[i][j] = 1;
        if(k> max.length) {
            max = s.substring(i,j+1);
        }
      }
    }
  }
  return max;
};