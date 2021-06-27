/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let total = (nums1.length + nums2.length);
    let med = Math.floor(total/2);
    let res = [];
    while(res.length <= med) {
        let cur1 = nums1[i] === undefined ?  Infinity : nums1[i];
        let cur2 = nums2[j] === undefined ?  Infinity : nums2[j];
        if(cur1 > cur2) {
            res.push(cur2);
            j++;
        } else{
            res.push(cur1);
            i++;
        }
    }
    if(total %2 == 0) {        
        return (res[med]+res[med-1])/2;
    } else {
        return res[med];
    }
};