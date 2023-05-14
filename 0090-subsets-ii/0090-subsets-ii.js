/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    let set = new Set();
    getSubset(nums,0,[]);
    function getSubset(nums, start, output) {
        if(start>=nums.length) {
            let key = output.sort().join(',');
            if(!set.has(key)) {
                res.push(output);    
                set.add(key);
            }
            
            return;
        }
        let char = nums[start];
        getSubset(nums,start+1,output);
        getSubset(nums,start+1,[...output,char]);
    }
    return res;
};