/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {    
    if(n==1 && k==1) return '0';
    let len = Math.pow(2,n-1);
    let mid = Math.floor(len/2);
    if(k<=mid) {
        return kthGrammar(n-1,k);
    } else {
        let res = kthGrammar(n-1,k-mid);
        return res == '0' ? '1' : '0';
    }
};

