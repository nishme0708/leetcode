/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let min = Number.MAX_VALUE;
    while(end<nums.length) {
        let item = nums[end];
        sum+=item;
        if(sum == target) {
            min = Math.min(min, end-start+1);
            sum-=nums[start++];            
        } else if(sum > target) {
            while(true) {
                let startItem = nums[start];
                if(sum-startItem >= target) {
                    sum = sum - startItem;
                    start++;
                } else {
                    break;
                }
            }
            min = Math.min(min, end-start+1);
            sum-=nums[start++];
        }
        end++;
    }
    return min == Number.MAX_VALUE ? 0 : min;
};