/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let [index, item] of nums.entries()) {        
        if(obj[item] === undefined){ obj[target-item] = index;}
        else {
            return [obj[item],index]
        }
    }
    
    return [];
};

//storing the deficit and if it matches with any item in the array - you have found the pair
