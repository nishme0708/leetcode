/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return genParam(n);
};

function genParam(n,str='',i=0,j=0) {    
    if(i==n && j==n) {
        return [str];
    } 
    if(j>i || i>n || j>n) {
        return [];
    }
    return genParam(n,str+'(',i+1,j).concat(genParam(n,str+')',i,j+1))
}

