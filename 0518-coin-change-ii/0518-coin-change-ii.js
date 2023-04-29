/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length;
    let table = Array(n+1).fill().map(()=>Array(amount+1).fill(0));
    for(let i = 0;i<=n;i++) {
        for(let j=0;j<=amount;j++) {
            if(j == 0) {
                table[i][j]=1;
            } else {
                if(i == 0) {
                    table[i][j] = 0;
                } else {
                    let rem = j - coins[i-1];
                    let total = table[i-1][j];
                    if(rem >= 0) {
                        total+=table[i][rem];
                    }
                    table[i][j] = total;
                }
            }
        }
    }
    
    return table[n][amount];
};

var recur = function( amount, coins, n=0,memo={}) {
    if(amount < 0) return 0;
    if(amount == 0 ) return 1;
    if(n>= coins.length) return 0;
    let key = amount + '-' + n;
    if(memo[key]) return memo[key];
    let item = coins[n];
    memo[key] = change(amount - item, coins, n, memo) + change(amount, coins, n+1,memo);
    return memo[key];
}