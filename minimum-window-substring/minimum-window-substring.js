/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    if(sLen == 1 && tLen == 1 ) {
        if(s == t) return s;
        else return '';
    }
    if(tLen > sLen) return '';
    
    let map = new Map();
    let update = new Map();
    let total = 0;
    for(let char of t) {
        if(!map.has(char)) {
            map.set(char,0);
            update.set(char,0);
            total++;
        }
        map.set(char,map.get(char)+1);
        
    }
    
    
    
    let start = 0;
    let end = 0;
    let min;
    let minStr = "";
    debugger;
    while(start <= end && end < sLen) {
        let char = s[end];
        if(map.has(char)) {            
            update.set(char, update.get(char)+1);
            if(update.get(char) == map.get(char)) {
                total--;
            }
        }

        while(total == 0) {
            if(!min) {
                min = end-start+1;
                minStr = s.substring(start,end+1);
            } else {
                if(min > (end-start+1)) {
                    min = end-start+1;
                    minStr = s.substring(start,end+1);
                }
            }
            let sChar = s[start];
            if(map.has(sChar)) {
                if(update.get(sChar) == map.get(sChar)) {
                    total++;                    
                }
                update.set(sChar,update.get(sChar)-1);
            }
            start++;
        }

        end++;
    }
    return minStr;
};
