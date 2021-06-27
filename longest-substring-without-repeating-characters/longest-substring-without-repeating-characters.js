/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //going to use the sliding window pattern here
    let left = 0;
    let right = 0;
    let max = 0;
    let strSet = new Set();
    // right will only slide when a valid condition is met
    while(right < s.length) {
        let c = s[right];
        if(!strSet.has(c)) {
            strSet.add(c);
            max = Math.max(max, strSet.size);
            right++;
        } else {
            strSet.delete(s[left]);
            left++;
        }
    }
    return max;
}
