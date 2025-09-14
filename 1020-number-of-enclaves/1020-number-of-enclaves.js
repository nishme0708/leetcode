/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let n = grid.length;
    let m = grid[0].length;

    let seen = {};
    let r = [1, -1, 0, 0]
    let c = [0, 0, 1, -1]

    for (let i of [0, n - 1]) {
        for (let j = 0; j < m; j++) {
            let el = grid[i][j];
            if (el == 1) {
                dfs(i, j)
            }

        }
    }

    for (let j of [0, m - 1]) {
        for (let i = 0; i < n; i++) {
            let el = grid[i][j];
            if (el == 1) {
                dfs(i, j)
            }
        }
    }
    console.log(grid)
    let total = 0;
      for (let i=0;i<n;i++) {
        for (let j = 0; j < m; j++) {
            let el = grid[i][j];
            if (el == '1') {
                total++
            }
        }
    }
    return total;

    function dfs(i, j) {
        
        grid[i][j] = '#';
        for (let index = 0; index < 4; index++) {
            let ni = i + r[index]
            let nj = j + c[index]
            if (ni < 0 || nj < 0 || ni >= n || nj >= m || grid[ni][nj] != 1) {
                continue;
            }
            dfs(ni, nj)
        }
    }
};