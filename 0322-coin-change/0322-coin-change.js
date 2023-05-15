/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;
    let table = Array(n+1).fill().map(()=>Array(amount+1).fill(Number.MAX_VALUE));
    for(let i =0;i<=n;i++) {
        for(let j =0;j<=amount;j++){
            if(j == 0) {
                table[i][j]=0;
            }else if(i==0){
                     continue;
                     } else {
                let rem = j-coins[i-1];
                if(rem>=0) {
                    table[i][j] = Math.min(1+table[i][rem], table[i-1][j]);
                } else {
                    
                    table[i][j] = table[i-1][j];
                }
            }
        }
    }
    
    return table[n][amount] == Number.MAX_VALUE ? -1 : table[n][amount];
};