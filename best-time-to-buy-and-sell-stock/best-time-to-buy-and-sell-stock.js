/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min;
  let maxProfit = 0;
  for (let price of prices) {
    if (min == undefined) {
      min = price;
      continue;
    }
    if (min > price) {
      min = price;
      continue;
    }
    maxProfit = Math.max(maxProfit, price - min);
  }
  return maxProfit;
};