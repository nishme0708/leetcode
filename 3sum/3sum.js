/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = new Set();
    for(let i=0;i<nums.length-2;i++) {
        if(nums[i]>0) break;
        // get rid of the duplicate start no
        // if(i> 0 && nums[i]==nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum == 0) {
                res.add(`${nums[i]},${nums[left]},${nums[right]}`);
                //here if there are duplicates
                // while(nums[left]==nums[left+1] && left<right)
                left++;
                // while(nums[right]==nums[right-1] && left<right)
                right--;
            } else {
                if(sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return Array.from(res).map(str=>str.split(','));
};