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
    while(res.length <= med && i < nums1.length && j< nums2.length) {
        if(nums1[i]<nums2[j]) {
            res.push(nums1[i++]);
        } else {
            res.push(nums2[j++]);
        }
    }
    if(res.length <= med) {
        if(i< nums1.length) {
            res = res.concat(nums1.slice(i));
        }
        if(j< nums2.length) {
            res = res.concat(nums2.slice(j));
        }
    }
    if(total %2 == 0) {        
        return (res[med]+res[med-1])/2;
    } else {
        return res[med];
    }
};