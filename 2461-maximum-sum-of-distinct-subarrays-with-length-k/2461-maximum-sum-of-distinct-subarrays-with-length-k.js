/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let max=0;
    let start = 0;
    let end = 0;
    let total = 0;
    let map = new Map();
    let duplicate = 0;
    while(end<nums.length) {
        let item = nums[end];
        if(map.has(item)){
            map.set(item,map.get(item)+1);
            if(map.get(item) == 2) {
                duplicate++;
            }
        } else {
            map.set(item,1);
        }
        total+=item;
        if((end-start+1) == k) {
            // window found            
            if(duplicate == 0)
            max = Math.max(max, total);
            let startItem = nums[start];
            total-=startItem;
            start++;
            map.set(startItem,map.get(startItem)-1);
            if(map.get(startItem) == 1) {
                duplicate--;
            }
        }
        end++;
    }
    return max;
};