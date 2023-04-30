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
           
       //code here
       let obj = {};
       for(let p of pat) {
           if(!obj[p]) {
               obj[p] = 0
           } 
           obj[p]++;
       }
       let total = pat.length;
       let res = 0;
       let start = 0;
       let end = 0;
       while(end<txt.length) {
           let current = txt[end];
           if(obj[current]!=undefined) {
               obj[current]--;
               if(obj[current]>=0)
               total--;
           }
           if(total == 0) {
               res++;
           }
           if(end-start+1 == pat.length) {
               let startChar = txt[start];
               if(obj[startChar] != undefined) {
                   obj[startChar]++;
                   if(obj[startChar]>0)
                   total++;
               }
               start++;
               end++;
           } else {
               end++;
           }
       }
       return res;
    }


    
    }
