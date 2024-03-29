/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0;
    let max = Number.NEGATIVE_INFINITY;
    for(let i =0;i<nums.length;i++) {
        prev = Math.max(prev + nums[i],nums[i]);
        max = Math.max(max,prev);
    }
    return max;
};