/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
        let res = [];
    if(n>0) {
    
        generate(n,0,0,'',res);
        return res;
    }
    return res;
    
};

function generate(n,start , end, str, arr = []) {
    if(start > n || end > n) return '';
    if(end > start) return '';
    if(start == end && start == n) {
        arr.push(str);
    }
    generate(n,start+1,end,str+'(',arr);
    generate(n,start,end+1,str+')',arr);
    
}