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
        if(s.length == 0 || p.length == 0) return -1;
        if(p.length > s.length) {
            [p,s] = [s,p];
        }
        let target = new Map();
        let count = 0;
        for(let item of p) {
            target.set(item,(target.get(item)||0)+1);
            if(target.get(item) == 1) {
                count++;
            }
        }
        let start = 0, end = 0;
        let map = new Map();
        let rs = -1, re=-1;
        let min = Number.MAX_VALUE;
        while(end<s.length) {
            let char = s[end];
            if(target.has(char)) {
                map.set(char,(map.get(char)||0)+1);
                if( map.get(char) == target.get(char)) {
                    count--;
                }    
            }
            
            if(count == 0) {
                while(true) {
                    let startItem = s[start];
                    if(!target.has(startItem)){
                        start++;
                    } else {
                        if(target.get(startItem) < map.get(startItem)) {
                            start++;
                            map.set(startItem,map.get(startItem)-1);
                        } else {
                            break;
                        }
                    }
                }
                if(min > (end-start+1)) {
                    min = end-start+1;
                    rs = start;
                    re = end;
                }
                let startItem = s[start++];
                map.set(startItem,map.get(startItem)-1);
                count++;
            }
            end++;
        }
        return rs == -1 ? rs : s.substring(rs,re+1);
    }
}