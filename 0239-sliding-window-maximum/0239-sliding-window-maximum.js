/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let start = 0;
    let end = 0;
    let q = [];
    let res = [];
    while(end<nums.length) {
        let curr = nums[end];
        if(!q.length) {
            q.push(curr);
        } else {
            
            if(q[0]<curr) {
                //flush
                q = [curr];
            } else {
                while(q[q.length-1] < curr) {
                    q.pop();
                }
                q.push(curr);
            }
        }
        
        if(end-start+1 == k) {            
            res.push(q[0]);
            let startC = nums[start];
            if(q[0] == startC) {
                q.shift();
            }            
            end++;
            start++;
        } else {
            end++;
        }
    }
    return res;
};