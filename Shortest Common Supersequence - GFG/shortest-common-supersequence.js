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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let X = input_line[0];
        
        let Y = input_line[1];
     
        let m = X.length;
        let n = Y.length;
        
        let obj = new Solution();
        let ans = obj.shortestCommonSupersequence(X, Y, m, n);
        if(ans==-0)
        ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} X
 * @param {string} Y
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
 
 
class Solution
{
    //Function to find length of shortest common supersequence of two strings.
    shortestCommonSupersequence(X, Y, m, n)
    {
        let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
        for(let i =0;i<=m;i++) {
            for(let j = 0;j<=n;j++) {
                if(i ==0 || j ==0) {
                    table[i][j] = 0;
                } else {
                    if(X[i-1] == Y[j-1]) {
                        table[i][j] = 1+ table[i-1][j-1];
                    } else {
                        table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
                    }
                }
            }
        }
        let total = table[m][n];
        return m+n-total;
    }
}