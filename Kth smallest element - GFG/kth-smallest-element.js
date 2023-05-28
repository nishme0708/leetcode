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
    let N = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.kthSmallest(arr,0,N-1,k);
    console.log(res);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  add(item) {
    this.heap.push(item);
    this.heapUp();
  }
  remove(item) {
    if (this.heap.length == 0) {
      return null;
    }
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapDown();
  }
  top() {
    if (this.heap.length) {
      return this.heap[0];
    } else {
      return null;
    }
  }

  len() {
    return this.heap.length;
  }

  heapUp() {
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (true) {
        let currentValue = this.heap[current];
        let parent = Math.floor((current - 1) / 2);
        let parentValue = this.heap[parent];
        if (parentValue < currentValue) {
          [this.heap[current], this.heap[parent]] = [
            this.heap[parent],
            this.heap[current],
          ];
          current = parent;
          if (current == 0) {
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  heapDown() {
    if (this.heap.length > 1) {
      let current = 0;
      while (true) {
        let currentValue = this.heap[current];
        let left = 2 * current + 1;
        let right = 2 * current + 2;
        let leftValue = this.heap[left];
        let rightValue = this.heap[right];

        let largeValue;
        let large;

        if (leftValue && currentValue < leftValue) {
          largeValue = leftValue;
          large = left;
        }
        if (rightValue && currentValue < rightValue) {
          if (!largeValue || (largeValue && rightValue > largeValue)) {
            largeValue = rightValue;
            large = right;
          }
        }
        if (largeValue) {
          [this.heap[large], this.heap[current]] = [
            this.heap[current],
            this.heap[large],
          ];
          current = large;
        } else {
          break;
        }
      }
    }
  }
}
class Solution {
  kthSmallest(arr,l,r,k){
    //code here
    let maxHeap = new MaxHeap();
    for(let item of arr){
        
        if(maxHeap.len() == k) {
            if(maxHeap.top() >= item) {
                maxHeap.add(item);
                maxHeap.remove(item);
            }
        } else {
            maxHeap.add(item);
        }
    }
    
    return maxHeap.top();
  }
}