/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0;
    let map = new Map();
    let duplicate = 0;
    let max = 0;
    while(end < s.length) {
        let char = s[end];
        map.set(char, (map.get(char) || 0) + 1);
        if(map.get(char)==2) {
            duplicate++;
        }
        if(duplicate == 0) {
            max = Math.max(max, end-start+1);
        } else {
            while(duplicate!=0 && start<=end) {
                let startItem = s[start++];
                map.set(startItem,map.get(startItem)-1);
                if(map.get(startItem) == 1){
                    duplicate--;
                }
            }
        }
        end++;
    }
    
    return max;
};