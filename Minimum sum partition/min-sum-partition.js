// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(nums) {
        // your code here
            let n = nums.length;
    // nums = nums.map(num=>Math.abs(num))
    let total = nums.reduce((a,c)=>a+c,0)
    
    let table = Array(n+1).fill().map(()=>Array(total+1).fill(false))
    for(let i=0;i<=n;i++){
        for(let j=0;j<=total;j++) {
            if(j==0) {
                table[i][j]= true;
                continue;
            }
            if(i==0){
                continue;
            }
            let val = nums[i-1];
            let bal = j - val;
            if(bal>=0) {
                table[i][j] = table[i-1][bal] || table[i-1][j]
            } else {
                table[i][j] = table[i-1][j]
            }
            
        }
    }
    let min = total;
    for(let i=1;i<=total;i++) {
        if(table[n][i]) {
            let value = i * 2;
            min = Math.min(min, Math.abs(total-value))
        }
    }
    return min
    }
}
