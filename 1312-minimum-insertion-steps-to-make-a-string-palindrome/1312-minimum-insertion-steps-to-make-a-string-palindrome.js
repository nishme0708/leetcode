/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let a = s;
    let b = s.split('').reverse().join('');
    let m = a.length;
    let n = b.length;
    let table = Array(m+1).fill().map(()=>Array(n+1));
    for(let i =0;i<=m;i++) {
        for(let j=0;j<=n;j++) {
            if(i==0 || j ==0) {
                table[i][j] = 0;
                
            }else {
                if(a[i-1] ==b[j-1]) {
                    table[i][j] = 1 + table[i-1][j-1];
                } else {
                    table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
                }
            }
        }
    }
    return m - table[m][n];
};