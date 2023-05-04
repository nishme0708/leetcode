/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if(m<n) {
        return find(nums1,nums2);
    }
    return find(nums2,nums1);
};

function find(nums1,nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let mid = Math.floor((m+n)/2);
    let low = 0;
    let high = nums1.length;
    while(low<=high) {
        let i = Math.floor((low+high)/2);
        let j = mid-i;
        
        let left1 = i == 0 ? Number.NEGATIVE_INFINITY : nums1[i-1];
        let left2 = j == 0 ? Number.NEGATIVE_INFINITY : nums2[j-1];
        
        let right1 = i == m ? Number.MAX_VALUE : nums1[i];
        let right2 = j == n ? Number.MAX_VALUE : nums2[j];
        console.log(left1,left2,right1,right2);
        if(left1<=right2 && left2<=right1) {
            
            if((m+n)%2 == 0) {
                return (Math.max(left1,left2) + Math.min(right1,right2))/2;
            } else {
                return Math.min(right1,right2);
            }
        } else if(left1 > right2) {
            high = i-1;
        } else if(left2 > right1) {
            low = i+1;
        }
        
    }
    return -1;
   
    
}