//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let txt = readLine().trim();
        let pat = readLine().trim();
        let obj = new Solution();
        let res = obj.search(pat,txt);
        if(res === -0){
            res = 0;
        }
        console.log(res);
        
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} pat
 * @param {string} txt
 * @return {number}
*/

class Solution {
    search(txt,pat){

           let obj = {};
    for(let letter of txt) {
        if(!obj[letter]) {
            obj[letter] = 0;
        }
        obj[letter]++;
    }
    let distinct = Object.keys(obj).length;
    let i = 0;
    let j = 0;
    let k = txt.length;
    let total = 0;
    while(j<pat.length) {
        let letter = pat[j];
        if(obj[letter] != undefined) {
            obj[letter]-=1;
            if(obj[letter] == 0) {
                distinct--;
            } 
        }
        if((j-i+1) == k ) {
            if(distinct == 0) {
                total++;
            }
            let prev = pat[i];
            if(obj[prev]!=undefined) {
                obj[prev]+=1;
                if(obj[prev]==1) {
                    distinct++;
                }
            }
            i++;
            j++;
            
        } else {
            j++;
        }
    }
    return total;
    }
}