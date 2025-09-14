/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let seen = Array(n).fill(false);
    let total = 0
    for(let i=0;i<n;i++) {
        if(!seen[i]) {
            total++;
            dfs(i)
        }
    }
    return total;

    function dfs(s) {
        if(seen[s]) {
            return;
        }
        seen[s]= true;
        for(let j=0;j<n;j++) {
            if(isConnected[s][j] == 1) {
                dfs(j)
            }
        }
    }
};