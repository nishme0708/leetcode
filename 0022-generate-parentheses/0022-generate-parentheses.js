/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let total = n*2;
    function gen(l,r,o) {
        
        if(o.length == total && l==r) {
            res.push(o)
            return;
        }
        if(r>l || l+r>total) return;
        gen(l+1,r,o+'(')
        gen(l,r+1,o+')')
    }
    gen(0,0,'')
    return res;
};