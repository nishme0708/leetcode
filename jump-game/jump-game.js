/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = 0;
    for(let i=0;i<=reach;i++) {
        reach = Math.max(reach, nums[i]+i);
        if(reach>=nums.length-1){
            return true;
        }
    }
    return false;
};