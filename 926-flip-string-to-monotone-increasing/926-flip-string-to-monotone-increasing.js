/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let flip = 0;
    let ones = 0;
    for(let i of s) {
        if(i=='1') {
            ones++;
        } else if(i=='0') {
            flip++;
            if(flip>ones) {
                flip = ones;                
            }
        }
    }
    return flip;
};