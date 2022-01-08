/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
       let m = s.length;
    let n = p.length;
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
    table[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 && j == 0) {
                table[i][j] = true;
                continue;
            }
            if (s[i - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.')) {
                table[i][j] = table[i - 1][j - 1];
            } else {
                if (p[j - 1] == '*') {
                    if (s[i - 1] && (s[i - 1] == p[j - 2] || p[j - 2] == '.')) {                       
                            table[i][j] = table[i - 1][j] || table[i][j - 1] || table[i][j - 2];                        
                    } else {
                        table[i][j] = table[i][j - 2];
                    }
                } else {
                    table[i][j] = false;
                }
            }
        }
    }
    return table[m][n];
};