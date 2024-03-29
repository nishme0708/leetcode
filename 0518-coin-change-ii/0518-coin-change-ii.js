/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let n = coins.length;
    let table = Array(n + 1).fill().map(() => Array(amount+1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j == 0) {
                table[i][j] = 1;
            } else if (i == 0) {
                continue;
            } else {
                let curr = coins[i - 1];
                let rem = j - curr;
                if (rem >= 0) {
                    table[i][j] = table[i][rem] + table[i - 1][j];
                } else {
                    table[i][j] = table[i - 1][j];
                }
            }
        }
    }
    
    return table[n][amount]
};