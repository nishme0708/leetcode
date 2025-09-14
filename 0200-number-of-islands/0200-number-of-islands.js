/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == '1') {
                total++;
                dfs(i, j)
            }
        }
    }
    return total;
    function dfs(i, j) {
        if (i < 0 || i >= n || j < 0 || j >= m) {
            return;
        }
        if (grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0'
        dfs(i + 1, j)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i, j - 1)
    }
};