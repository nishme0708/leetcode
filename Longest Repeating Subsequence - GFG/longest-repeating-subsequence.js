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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.LongestRepeatingSubsequence(str);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} str
 * @returns {number}
*/

class Solution{
    LongestRepeatingSubsequence(str){
        //code here
        let a = str;
        let b = str;
        let m = a.length;
        let n = b.length;
        let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
        for(let i=0;i<=m;i++) {
            for(let j =0;j<=n;j++) {
                if(i==0 || j==0) {
                    table[i][j] = 0;
                } else {
                    if(a[i-1]==b[j-1] && i!=j) {
                        table[i][j] = 1+ table[i-1][j-1];
                    } else {
                        table[i][j] = Math.max(table[i-1][j],table[i][j-1])
                    }
                }
            }
        }
        return table[m][n];
    }
}


