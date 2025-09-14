/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let q = [];
    let time = 0;
    let row = [1, -1, 0, 0]
    let col = [0, 0, 1, -1]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 2) {
                q.push([i, j, 0])
            }
        }
    }
    bfs();
        for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }
    return time
    function bfs() {
        while (q.length) {

            let [i, j, t] = q.shift();
            
            time = Math.max(time, t)
            for (let index = 0; index < 4; index++) {
                let ui = i + row[index]
                let uj = j + col[index]
            
                if (ui < 0 || uj < 0 || ui >= n || uj >= m || grid[ui][uj] != 1) {
                    continue;
                }
                grid[ui][uj] = 2;
                q.push([ui, uj, t + 1])
            }
        }
    }
};