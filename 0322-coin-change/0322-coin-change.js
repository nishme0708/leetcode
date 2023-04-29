/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRec = function(coins, amount, n = coins.length-1,) {
  if(amount < 0) return -1;
  if(amount == 0 ) return 0;
  if(n<0) return -1;
  let coin = coins[n];
  
  let take = coinChange(coins, amount-coin, n);  
  let dont = coinChange(coins, amount, n-1);
  let min = Number.MAX_VALUE;
  if(take < 0 && dont < 0) return -1;
  if(take >= 0) {
      min = Math.min( min, 1+take);
  }
    if(dont >= 0) {
      min = Math.min( min, dont);
  }
  return min;
  
};

var coinChange = function(coins, amount) {
  let n = coins.length;
  let table = Array(n+1).fill().map(()=>Array(amount+1).fill(0));
  for(let i = 0;i<=n;i++) {
      for(let j=0;j<=amount;j++) {
          if(j == 0) {
              table[i][j] = 0;
          } else {
              if(i == 0) {
                table[i][j] = -1;
              } else {
                  let rem = j - coins[i-1];
                  let res = Number.MAX_VALUE;
                  let take = -1;
                  if(rem >= 0) {
                      take = table[i][rem];
                  }
                  let dont = table[i-1][j];
                  if(take == -1 && dont == -1)  {
                      res = -1;
                  } else {
                      if(dont != -1) {
                          res = Math.min(res, dont);
                      } 
                      if(take != -1) {
                          res = Math.min(res, take+1);
                      }
                      
                  }
                  table[i][j] = res;
              }
              
          }
      }
  }
    
    return table[n][amount]
  
};