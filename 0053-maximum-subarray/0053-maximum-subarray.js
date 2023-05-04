/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0;
    let start = 0;
    let end = 0;
    let max = Number.NEGATIVE_INFINITY;
    for(let i =0;i<nums.length;i++) {
       let curr = nums[i];
       prev+=curr;
       if(prev < curr) {
           prev = curr;
           start = i;
           
       }
        if(max < prev) {
            max = prev;
            end = i;
        }
    }
    console.log(nums.slice(start,end+1).join());
    return max;
};