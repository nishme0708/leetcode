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
        let i = 0;
        let j = 0;
        let max = -1;
        let distinct = 0;
        let obj = {};
        while(j<s.length) {
            let char = s[j];
            if(obj[char]) {
                obj[char]++;
            } else {
                obj[char] = 1;
                distinct++;
            }
            if(distinct == k) {
                max = Math.max(max, j-i+1);
            } 
             else if ( distinct > k) {
                let prev = s[i];
                i++;
            
                obj[prev]--;
                if(obj[prev] == 0) {
                    distinct--;
                }
            }
            j++;
        }
        return max;
    }
}
