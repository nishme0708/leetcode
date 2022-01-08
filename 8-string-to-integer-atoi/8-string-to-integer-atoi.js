/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
    let res = 0;
    let multiplier = 1;
    let parsed = false;
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];
        if (curr == ' ') {
            if (parsed) {
                break;
            }
        } else if (curr == '-' && !parsed) {
            multiplier = -1;
            parsed = true;
        } else if (curr == '+' && !parsed) {
            parsed = true;
        } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            parsed = true;
            res = res * 10 + +curr;
        } else {
            break;
        }
    }
    res = res * multiplier;
    res = Math.min(res, Math.pow(2, 31) - 1);
    res = Math.max(res, Math.pow(-2, 31));
    return res;
};