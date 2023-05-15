/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    if(m== 0 || n ==0 ) return 0;
    let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
    for(let i=0;i<=m;i++) {
        for(let j=0;j<=n;j++) {
            if(i==0 || j==0){
                table[i][j]=0;
            } else {
                if(text1[i-1] == text2[j-1]) {
                    table[i][j] = 1 + table[i-1][j-1];
                } else {
                    table[i][j] = Math.max(table[i][j-1],table[i-1][j]);
                }
            }
        }
    }
    return table[m][n];
};