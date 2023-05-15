//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input1 = readLine().split(" ").map((x) => parseInt(x));
    let n = input1[0];
    let m = input1[1];
    let S1 = readLine();
    let S2 = readLine();
    let obj = new Solution();
    let res = obj.longestCommonSubstr(S1,S2,n,m);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S1
 * @param {string} S2
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    longestCommonSubstr(S1,S2,m,n){
        //code here
        let table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
        let count = 0;
        let max = 0;
        for(let i=0;i<=m;i++) {
            for(let j=0;j<=n;j++) {
                if(i==0 || j==0){
                    table[i][j] = 0;
                } else {
                    if(S1[i-1]==S2[j-1]) {
                        table[i][j] = 1+ table[i-1][j-1];
                        max = Math.max(max, table[i][j]);
                    } else {
                        table[i][j] = 0;
                    }
                }
            }
        }
        
    return max
    }
}