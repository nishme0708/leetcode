/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const current = [];
    const seen = Array(nums.length).fill(false);
    
    function dfs() {
        if(current.length == nums.length) {
            res.push([...current]);
            return;
        }
        for(let i=0;i<nums.length;i++) {
            if(seen[i]) {
                continue;
            }
            current.push(nums[i]);
            seen[i] = true;
            
            dfs();
            seen[i] = false;
            current.pop();
        }
    }
    dfs();
    return res;


    
};


