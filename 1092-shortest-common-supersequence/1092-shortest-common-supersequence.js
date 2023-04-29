/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
    for(let i = 0;i<=m;i++) {
        for(let j =0;j<=n;j++) {
            if(i ==0 || j==0) {
                table[i][j] = 0;
            } else {
                if(str1[i-1] == str2[j-1]) {
                    table[i][j] = 1+ table[i-1][j-1];
                } else {
                    table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
                }
            }
                
        }
    }
    let res = '';
    let i = m;let j = n;
    while(i>0 && j>0) {
        let char1 = str1[i-1];
        let char2 = str2[j-1];
        if(char1 == char2) {
            res = char1+ res;
            i--;
            j--;
        } else {
            if(table[i-1][j]>table[i][j-1]) {
                res = char1 + res;
                i--;
            } else {
                res = char2 + res;
                j--;
            }
        }
    }
    while(i>0) {
        let char = str1[i-1];
        res = char + res;
        i--;
    }
    while(j>0) {
        let char = str2[j-1];
        res = char + res;
        j--;
    }
    return res;
};