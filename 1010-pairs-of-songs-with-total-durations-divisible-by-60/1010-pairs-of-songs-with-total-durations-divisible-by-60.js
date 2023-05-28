/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map = new Map();
    let count = 0;
    for(let t of time) {
        let mod = t%60;
        if(mod == 0) {
            if(map.has(mod)) {
            count+=map.get(mod);
            }    
        } else {
            let b = 60-mod;
            if(map.has(b)) {
                count+=map.get(b);
            }
        }
        
        map.set(mod, (map.get(mod)||0)+1);
        
    }
    return count;
};