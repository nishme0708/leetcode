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
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let k = parseInt(input_line[1]);
        let a = new Array(n);
        input_line = readLine().split(" ");
        for(let i=0;i<n;i++)
            a[i] = parseInt(input_line[i]);
            
        let obj = new Solution();
        let ans = obj.max_of_subarrays(a,n,k);
        let s="";
        for(let i=0;i<ans.length;i++)
        {
            if(ans[i]==-0)
            s+="0";
            else 
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/
class Solution 
{
    //Function to find maximum of each subarray of size k.
	max_of_subarrays(arr, n, k)
	{
        
        let start = 0, end = 0;
        let queue = [];
        let res = [];
        while(end < arr.length) {
            let item = arr[end];
            if(queue.length == 0) {
                queue.push(item);
            } else {
                if(queue[0]<item){
                    queue = [item];
                } else {
                    while(queue.length && queue[queue.length-1]<item) {
                        queue.pop();
                    }
                    queue.push(item);
                }
            }
            if(end-start+1 ==k) {
                res.push(queue[0]);
                let startItem = arr[start++];
                if(startItem == queue[0]) {
                    queue.shift();
                }
            }
            end++;
        }
        return res;
    }
}
