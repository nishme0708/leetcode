/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function gen(open,close,output) {
        if(close > open) return;
        if(output.length > n*2) return;
        if(output.length == n*2 && open == close) {
            res.push(output);
            return;
        }
        gen(open+1,close,output+'(');
        gen(open,close+1,output+')');
    }
    gen(0,0,'');
    return res;
};