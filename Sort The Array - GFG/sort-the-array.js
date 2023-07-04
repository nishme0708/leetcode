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
        
        
        let arr = [];
        let input_ar1 = readLine().split(" ").map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr.push(input_ar1[i]);
        }
        
        let obj = new Solution();
        let res = obj.sortArr(n, arr);
        
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
* @param number[] arr

* @returns number[]
*/
    merge(arr1,arr2) {
        let res = [];
        let i=0,j=0;
        while(i<arr1.length && j<arr2.length) {
            let a = arr1[i];
            let b = arr2[j];
            if(a < b) {
                res.push(a);
                i++;
            } else {
                res.push(b);
                j++;
            }
        }
        if(i<arr1.length) {
            res = res.concat(arr1.slice(i));
        }
        if(j<arr2.length) {
            res = res.concat(arr2.slice(j));
        }
        return res;
    }

    sortArr(n, arr) {
        let len = arr.length;
        if(len == 0 || len == 1) return arr;
        if(len == 2) {
            if(arr[0] < arr[1]) {
                return arr;
            } else {
                return [arr[1],arr[0]]
            }
        }
        let m = len/2;
        return this.merge(this.sortArr(n,arr.slice(0,m)),this.sortArr(n,arr.slice(m)))
    }
}
        
