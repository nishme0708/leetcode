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

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.longestKSubstr(s, k);
    console.log(res);
  }
}



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        let map = new Map();
        let start = 0;
        let end = 0;
        let unique = 0;
        let res = -1;
        while(end<s.length) {
            let char = s[end];
            map.set(char, (map.get(char) || 0 )+1);
            if(map.get(char) == 1) {
                unique++;
            }
            if(unique == k) {
                res = Math.max(res, (end-start+1));
            }
            while(unique > k && start <= end) {
                let startItem = s[start];
                map.set(startItem, map.get(startItem)-1);
                if(map.get(startItem) == 0) {
                    unique--;
                }
                start++;
            }
            
            end++;
        }
        return res;
    }
}
