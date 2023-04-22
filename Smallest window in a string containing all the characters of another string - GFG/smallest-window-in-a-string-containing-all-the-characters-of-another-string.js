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
        let input_line = readLine().split();
        let S = input_line[0];
        input_line = readLine().split();
        let P = input_line[0];
        let obj = new Solution();
        let ans = obj.smallestWindow(S, P);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @param {string} p
 * @returns {string}
*/


class Solution 
{
    //Function to find the smallest window in the string s consisting
    //of all the characters of string p.
    smallestWindow(s, p)
    {
      if (p.length > s.length) {
    return -1;
  }
  let start = 0;
  let end = 0;
  let obj = {};
  let sobj = {};
  for (let char of p) {
    if (!obj[char]) obj[char] = 0;
    obj[char]++;
    sobj[char] = 0;
  }
  let count = 0;
  let window = '';
  while (end < s.length) {
    let char = s[end];
    if (sobj[char] != undefined) {
      sobj[char]++;
      if (sobj[char] <= obj[char]) {
        count ++;
      }
    }
    if (count == p.length) {
      //window found
      //try to reduce window
      while (start <= end) {
        let schar = s[start];
        if (!sobj[schar]) {
          start++;
        } else {
          if (sobj[schar] > obj[schar]) {
            start++;
            sobj[schar]--;
          } else {
            break;
          }
        }
      }
      let match = s.substring(start, end + 1);
      if(!window) {
        window = match;
      } else {
        if (match.length < window.length) {
            window = match;
          }
      }
      
      let remove = s[start];
      start++;
      sobj[remove]--;
      count--;
    }
    end++;
  }
  return window.length ? window : -1;
    }
}