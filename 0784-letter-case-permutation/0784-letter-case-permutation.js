/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];
    function getPerms(s,i,output) {
        if(i>=s.length) {
            res.push(output);
            return;
        }
        let char = s[i];
        let isChar = isNaN(char);
        if(isChar) {
            getPerms(s,i+1,output+(char.toUpperCase()));    
        }
        getPerms(s,i+1,output+char);        
    }
    getPerms(s.toLowerCase(),0,'');
    return res;
};