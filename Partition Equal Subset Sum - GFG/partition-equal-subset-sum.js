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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let ok = obj.equalPartition(arr, n);
        if(ok)
            console.log("YES");
        else
            console.log("NO");
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    
    equalPartition(arr, n)
    {
        let total = 0;
        for(let item of arr) {
            total+=item;
        }
        if(total %2!=0) {
            return false;
        }
        let mid = total / 2;
        let table = Array(n+1).fill().map(()=>Array(mid+1).fill(false));
        for(let i=0;i<=n;i++) {
            for(let j=0;j<=mid;j++) {
                if(j==0) {
                    table[i][j] = true;
                } else if(i==0) {
                    continue;
                }else {
                    let cwt = arr[i-1];
                    let rem = j - cwt;
                    if(rem >=0) {
                        table[i][j] = table[i-1][rem] || table[i-1][j];
                    } else {
                        table[i][j] = table[i-1][j];
                    }
                }
            }
        }
        return table[n][mid]
    }
}