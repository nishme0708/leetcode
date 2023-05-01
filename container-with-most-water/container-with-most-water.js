/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let max = 0;
    while(start<end) {
        max = Math.max(max, (end-start) * Math.min(height[start],height[end]) );
        if(height[start]<height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};