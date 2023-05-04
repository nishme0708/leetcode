/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0;
    let high = nums.length;
    let res = [-1,-1];
    while(low<=high) {
        let mid = Math.floor((low+high)/2);
        let item = nums[mid-1];
        
        if(item == target) {
            
            let left = mid - 1;
            while(left >= 0 && nums[left] == target) left--;
            let right = mid-1;
            while(right < nums.length && nums[right] == target) right++;
            console.log(mid-1,left,right);
            return [left+1,right-1]
        }
        if(item > target) {
            high = mid-1;
            
        } else {
            low = mid+1
        }
    }
    return res;
};