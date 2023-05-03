/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1.length == 0 || num2.length == 0 ) return "";
    let m = num1.length;
    let n = num2.length;
    let res = Array(n+m).fill(0);
    for(let i=num1.length-1;i>=0;i--) {
        
        let c1 = num1[i].charCodeAt(0)-48;
        for(let j=num2.length-1;j>=0;j--) {
            
            let c2 = num2[j].charCodeAt(0)-48;
            let prev = res[i+j+1];
            let total = (c1*c2) + (prev);
            res[i+j+1] = total %10;
            res[i+j]+= Math.floor(total/10);            
        }
    }
    let i = 0;
    for(i=0;i<res.length;i++) {
        if(res[i] != 0) break;
    }
    
    if(i==res.length) return '0';
    return res.slice(i).join('');
};