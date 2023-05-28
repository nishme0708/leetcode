/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let res = 0;
    map.set(0,1);
    for(let item of nums) {
        sum+=item;
        let rem = sum - k;
        if(map.has(rem)) {
            res+=map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0)+1);
    }
    
    return res;
};