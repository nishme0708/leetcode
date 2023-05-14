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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.NBitBinary(N);
        let s = "";
        for(let j = 0;j<res.length;j++){
            s+=res[j] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {string[]}
*/

class Solution {
    NBitBinary(N){
       //code here
       let res = [];
       this.gen(N,0,0,'',res)
       return res;
    }
    gen(n,zero,one,output,res) {
        if(output.length > n) return;
        if(one<zero) return;
        if(output.length == n) {
                res.push(output);
                return;
        }
        this.gen(n,zero,one+1,output+'1',res);
        this.gen(n,zero+1,one,output+'0',res);
        
    }
}
