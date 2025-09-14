/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let n = board.length;
    let m = board[0].length;

    let seen = {};
    let r = [1, -1, 0, 0]
    let c = [0, 0, 1, -1]

    for (let i of [0, n - 1]) {
        for (let j = 0; j < m; j++) {
            let el = board[i][j];
            if (el == 'O' && !seen[i + '-' + j]) {
                dfs(i, j)
            }

        }
    }

    for (let j of [0, m - 1]) {
        for (let i = 0; i < n; i++) {
            let el = board[i][j];
            if (el == 'O' && !seen[i + '-' + j]) {
                dfs(i, j)
            }

        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let el = board[i][j];
            if (el == 'O' && !seen[i + '-' + j]) {
                board[i][j] = 'X'
            }

        }
    }
    function dfs(i, j) {
        let key = i + '-' + j;
        seen[key] = true;
        for (let k = 0; k < 4; k++) {
            let ni = i + r[k]
            let nj = j + c[k]
            if (ni < 0 || nj < 0 || ni >= n || nj >= m || seen[ni + '-' + nj] || board[ni][nj] != 'O') {
                continue;
            }
            dfs(ni, nj)
        }
    }
};