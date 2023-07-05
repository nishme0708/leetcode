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
    search(pat,txt){
       //code here
       let match = new Map();
       let unique = 0;
       for(let char of pat) {
           if(!match.has(char)) {
               match.set(char,0);
               unique++;
           } 
           match.set(char,match.get(char)+1);
       }
       let start = 0,end=0;
       let found = 0;
       while(end<txt.length) {
           let char = txt[end];
           if(match.has(char)) {
               match.set(char,match.get(char)-1);
               if(match.get(char) == 0) {
                   unique--;
               }
           }
           if(end-start+1 == pat.length) {
               if(unique == 0) {
                   found++;
               }
               let startItem = txt[start];
               start++;
               if(match.has(startItem)) {
                   match.set(startItem,match.get(startItem)+1);
                   if(match.get(startItem) == 1) {
                       unique++;
                   }
               }
           } 
           end++;
       }
       return found;
    }
}