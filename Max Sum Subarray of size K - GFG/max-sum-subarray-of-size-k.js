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

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [N, K] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let Arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.maximumSumSubarray(K, Arr, N);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} K
 * @param {number[]} Arr
 * @param {number} N
 * @return {number}
 */
class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let start = 0, end = 0;
    let total = 0;
    let max = 0;
    while(end<N) {
        let item = Arr[end];
        total+=item;
        if(end-start+1 == K) {
            max = Math.max(max, total);
            let startItem = Arr[start];
            start++;
            total-=startItem;
        } 
        end++;
        
    }
    return max;
  }
}
