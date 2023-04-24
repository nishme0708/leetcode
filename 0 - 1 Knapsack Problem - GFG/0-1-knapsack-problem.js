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
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let W = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let val = new Array(n);
        for(let i=0;i<n;i++)
            val[i] = parseInt(input_line[i]);
        
        input_line = readLine().split(' ');
        let wt = new Array(n);
        for(let i=0;i<n;i++)
            wt[i] = parseInt(input_line[i]);
        
        
        let obj = new Solution();
        let ans = obj.knapSack(W, wt, val, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n,memo={})
    { 
       const table = Array(n+1).fill().map(()=>Array(W+1).fill(0));
       for(let i=0;i<=n;i++) {
           for(let j = 0;j<=W;j++) {
               if(i==0 || j==0){
                   table[i][j] = 0;
                   continue;
               }
               let currentW = wt[i-1];
               let currentV = val[i-1];
               if(currentW<=j) {
                   let updatedW = j-currentW;
                   let tableValue = 0
                   if(updatedW>=0) {
                       tableValue = table[i-1][updatedW];
                   }
                   table[i][j] = Math.max(table[i-1][j],currentV+tableValue);
               } else {
                   table[i][j] = table[i-1][j];
               }
           }
       }
       return table[n][W];
    }
}

