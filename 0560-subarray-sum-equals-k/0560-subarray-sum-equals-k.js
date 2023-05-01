/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let total = 0;
    let res = 0;
    for(let i =0;i<nums.length;i++) {
        let curr = nums[i];
        total+=curr;
        if(total == k) {
            res++;
        }
        let diff = total -k;
        if(map.has(diff)) {
            res+=map.get(diff);
        }
        if(!map.has(total)) {
            map.set(total,0);
        }
        map.set(total,map.get(total)+1);
    }
    return res;
};