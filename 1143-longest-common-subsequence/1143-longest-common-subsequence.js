/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceRec = function(  a,
  b,
  m = a.length - 1,
  n = b.length - 1,
  memo = {}) {
      let key = m + '-' + n;
  if (memo[key]) return memo[key];
  if(m<0 || n<0) return 0;
  let one = a[m];
  let two = b[n];
  if (one == two) {
    memo[key] = 1 + longestCommonSubsequence(a, b, m - 1, n - 1, memo);
  } else {
    memo[key] = Math.max(
      longestCommonSubsequence(a, b, m - 1, n, memo),
      longestCommonSubsequence(a, b, m, n - 1, memo)
    );
  }
  return memo[key];
};


var longestCommonSubsequence = function(  a,  b) {
    let m = a.length;
    let n = b.length;
    let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
    for(let i = 0;i<=m;i++) {
        for(let j =0;j<=n;j++) {
            if(i == 0 || j ==0) {
                table[i][j] = 0;
            } else {
                if(a[i-1] == b[j-1]) {
                    table[i][j] = 1+ table[i-1][j-1];
                } else {
                    table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
                }
            }
        }
    }
    return table[m][n];
};