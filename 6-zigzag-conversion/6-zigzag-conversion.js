/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(str, row) {
    let start = 0;
    let end = str.length;
    if (!str) return '';
    if(row ==1) return str;
    let res = {};
    let i = 0;
    let j = 0;
    let down = true;
    while (start < end) {
        let current = str[start++];
        if (down) {
            if (!res[i]) {
                res[i] = current;
            } else {
                res[i] += current;
            }
            if (i == row - 1) {
                down = false;
            } else {
                i++;
            }
        } else {
            i--;
            j++;
            if (!res[i]) {
                res[i] = current;
            } else {
                res[i] += current;
            }
            if (i == 0) {
                down = true;
                i++;
            }
        }
    }
    let finalres = '';
    for (let m = 0; m < end; m++) {
        if (res[m]) {
            finalres += res[m];
        }
    }
    return finalres;
};