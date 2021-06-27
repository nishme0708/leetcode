/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    debugger;
    var resObj = {
        str: '',
        max: 0
    };
    for (let c of s) {
        if (!resObj[c]) {
            updateString(c, resObj);
        } else {
            while (resObj[c]) {
                let presentStr = resObj.str[0];
                resObj.str = resObj.str.slice(1);
                resObj[presentStr] = false;
            }
            updateString(c, resObj);
        }
    }
    return resObj.max;
};

function updateString(c, resObj) {
    resObj[c] = true;
    resObj.str += c;
    if (resObj.max < resObj.str.length) {
        resObj.max = resObj.str.length;
    }
}
