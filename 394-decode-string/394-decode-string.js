/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res = '';
    let prev = 0;
    let charstack = [];
    let num = [];
    for(let c of s) {
        if(isNaN(Number(c))) {
            if(c=='['){
                
                num.push(prev);
                prev = 0;
            } 
            if(c == ']') {
                let rep = '';
                while(true) {
                    let pop = charstack.pop();
                    if(pop=='[') break;
                    rep = pop+rep;
                }
                let str = '';
                for(let i = num.pop();i>0;i--) {
                    str = str+rep;
                }
                charstack.push(str);
            }else {
                charstack.push(c);
            }
        } else {
            prev = (prev*10) + Number(c);
        }
    }
    while(charstack.length) {
        res = charstack.pop() + res;
    }
    return res;
    
};