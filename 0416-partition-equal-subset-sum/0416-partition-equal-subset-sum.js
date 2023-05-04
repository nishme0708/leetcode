/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((total,curr)=>total+curr,0);
    if(total%2 != 0) return false;
    let n = nums.length;
    let sum = total /2 ;
    let table = Array(n+1).fill().map(()=>Array(sum+1).fill(false));
    for(let rowIndex = 0;rowIndex < table.length; rowIndex++) {
        for(let colIndex = 0;colIndex< table[rowIndex].length;colIndex++) {
            if(colIndex == 0) {
                table[rowIndex][colIndex] = true;
            } else {
                if(rowIndex == 0) {
                    table[rowIndex][colIndex] = false;
                } else {
                    let rem = colIndex - nums[rowIndex - 1 ];
                    if(rem < 0) {
                        table[rowIndex][colIndex] = table[rowIndex - 1][colIndex];
                    } else {
                        table[rowIndex][colIndex] = table[rowIndex - 1][colIndex] || table[rowIndex - 1][rem];
                    }
                }
            }
        }
    }
    return table[n][sum];
};