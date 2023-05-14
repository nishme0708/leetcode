/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    function getSubset(nums, start,output) {
    if(start > nums.length-1) {
        res.push(output);
        return;
    }
    let char = nums[start];
    getSubset(nums,start+1,[...output,char]);
    getSubset(nums,start+1,output);
}
    getSubset(nums,0,[]);
    return res;
    
};

