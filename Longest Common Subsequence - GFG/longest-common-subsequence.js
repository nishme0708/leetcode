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
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let s1 = input_line[0];
        
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        
        let obj = new Solution();
        let ans = obj.lcs(x, y, s1, s2);
        if(ans==-0)
        ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} x
 * @param {number} y
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
*/
 
class Solution
{
    //Function to find the length of longest common subsequence in two strings.
    lcs(x, y, s1, s2)
    {
        // code here
        let m = s1.length;
        let n = s2.length;
        let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
        for(let i=0;i<=m;i++) {
            for(let j=0;j<=n;j++) {
                if(i==0 || j==0) {
                    continue;
                } else {
                    let a = s1[i-1];
                    let b = s2[j-1];
                    if(a==b) {
                        table[i][j] = 1+table[i-1][j-1];
                    } else {
                        table[i][j] = Math.max(table[i-1][j],table[i][j-1])
                    }
                }
            }
        }
        return table[m][n]
    }
}
