/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let target = new Map();
    for(let char of p) {
        target.set(char,(target.get(char) || 0)+1);
    }
    let total = 0;
    let found = new Map();
    let start = 0, end = 0;
    let res = [];
    while(end < s.length) {
        let char = s[end];
        found.set(char, (found.get(char) || 0)+1);
        if(found.get(char) == target.get(char)) {
            total++;
        }
        if(end-start+1 == p.length) {
            if(total == target.size) {
                res.push(start);
            }
            let startItem = s[start++];
            if(found.has(startItem)){
                if(target.has(startItem) && target.get(startItem) == found.get(startItem)) {
                    total--;
                }
                found.set(startItem,found.get(startItem)-1);
            }
        }
        end++;
    }
    return res;
};