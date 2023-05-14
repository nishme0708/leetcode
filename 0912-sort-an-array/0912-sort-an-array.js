/**
 * @param {number[]} nums
 * @return {number[]}
 */
function merge(arr1,arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length) {
        let a = arr1[i];
        let b = arr2[j];
        if(a<=b) {
            res.push(a);
            i++;
        } else {
            res.push(b);
            j++;
        }
    }
    if(i<arr1.length) {
        res = res.concat(arr1.slice(i));
    }
    if(j<arr2.length) {
        res = res.concat(arr2.slice(j));
    }
    return res;
}
var sortArray = function(nums) {
    if(!nums.length) return [];
    if(nums.length == 1) return nums;
    if(nums.length == 2) {
        if(nums[0] <= nums[1]) return nums;
        return [nums[1],nums[0]];
    }
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};