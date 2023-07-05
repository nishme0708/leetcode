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
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.AllParenthesis(N);
    res.sort();
    for(let s of res)
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
    AllParenthesis(N){
        //code here
        let res = [];
        this.getParan('',0,0,N*2,res);
        return res;
    }
    
    getParan(output,left, right,total,res) {
        if(right > left) return;
        if(output.length == total ) {
            if(left == right) {
                res.push(output);
            }
            return;
        }
        this.getParan(output+'(',left+1,right,total,res);
        this.getParan(output+')',left,right+1,total,res);
    } 
}

