/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i;
    for(i=nums.length -2;i>=0;i--) {
        if(nums[i]<nums[i+1]) break;
    }
    if(i<0) {
        nums.reverse()
    } else {
        let j;
        for(j=nums.length -1 ;j>=0;j--) {
            if(nums[j]> nums[i]) {
                break;
            }
        }
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        let found = nums.slice(i+1);
        found.reverse();
        console.log(nums,found,i)
        nums.splice(i+1,nums.length,...found);
        
    }
        
};