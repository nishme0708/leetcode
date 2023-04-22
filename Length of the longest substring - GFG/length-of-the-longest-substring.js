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
    let str = readLine();
    let obj = new Solution();
    let res = obj.longestUniqueSubsttr(str);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    longestUniqueSubsttr(str){
        //code here
        let i = 0;
        let j = 0;
        let duplicate = 0;
        let max = -1;
        let map = {};
        while(j<str.length) {
            let letter = str[j];
            if(map[letter]) {
                if(map[letter] == 1) {
                    duplicate++;
                }
                map[letter]++;
            } else {
                map[letter] = 1;
            }
            
            if(duplicate == 0) {
                max = Math.max(max, j-i+1);
            } else {
                let prev = str[i];
                i++;
                if(map[prev] == 2) {
                    duplicate--;
                }
                map[prev]--;
            }
            j++;
        }
        return max;
    }
}