//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let k = parseInt(readLine());
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        
        let obj = new Solution();
        let res = obj.printFirstNegativeInteger(n, k, arr);
        
        let S = '';
        for(let i=0;i<res.length;i++)
        {
            S+=(res[i]);
            S+=' ';
        }
        console.log(S);
        
    }
}

// } Driver Code Ends


class Solution {
/**
* @param number n
* @param number k
* @param number[] arr

* @returns number[]
*/
    printFirstNegativeInteger(n, k, arr) {
        // code here
        let start = 0;
        let end = 0;
        let queue = [];
        let res = [];
        while(end < n) {
            let current = arr[end];
            if(current < 0) {
                queue.push(current);
            }
            if(end-start+1 == k) {
                if(queue.length == 0) {
                    res.push(0);
                } else {
                    res.push(queue[0]);
                }
                let startElement = arr[start];
                if(queue[0] == startElement) {
                    queue.shift();
                }
                start++;
                end++;
            } else {
                end++;
            }
        }
        return res;
    }
}
        
