/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if(arr.length == k) {
        return arr;
    }
    let left = 0;
    let right = arr.length - k;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        let midk = mid+k;
        if(x<arr[mid]) {
            right = mid;
        } else if(x>arr[midk]) {
            left = mid+1;
        } else if(Math.abs(arr[mid]-x)<=Math.abs(arr[midk]-x)) {
            right = mid;            
        } else {
            left = mid+1;
        }
        
    }
    return arr.slice(left,left+k);
};