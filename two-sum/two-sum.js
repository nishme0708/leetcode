/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0;i<nums.length;i++) {
        let item = nums[i];
        if(obj[item] === undefined){ obj[item] = i;}        
    }
    for(let i = 0;i<nums.length;i++) {
        let value = nums[i];
        let remain = target - value;
        if(obj[remain] !== undefined && obj[remain]!== i) {
            return [i, obj[remain]];
        }
    }
    return [];
};