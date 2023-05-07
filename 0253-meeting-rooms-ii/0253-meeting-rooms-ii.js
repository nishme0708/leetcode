/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms1 = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    
    let minHeap = new MinHeap();
    let overlap = 0;
    for(let interval of intervals) {
        let [start,end] = interval;
        if(!minHeap.peek()) {
            minHeap.insert(end);
        } else {
            if(start >= minHeap.peek()) {                
                minHeap.remove();
            }
            minHeap.insert(end);            
        }
        overlap = Math.max(overlap,minHeap.length());
    }
    return overlap;
    
};

var minMeetingRooms = function(intervals) {
    let start = [];
    let end = [];
    intervals.forEach(interval=>{
        start.push(interval[0]);
        end.push(interval[1]);
    });
    start.sort((a,b)=>a-b);
    end.sort((a,b)=>a-b);
    let j = 0;
    let total = 1;
    for(let i = 1;i<start.length;i++) {
        let s = start[i];
        let e = end[j];
        if(s<e){
            total++;
        } else {
            j++;
        }
    }
    return total;
    
   
    
};


class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    // we have inserted the heap element but need to find if its correct

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (true) {
        let currentValue = this.heap[current];
        let parent = Math.floor(current / 2);
        let parentValue = this.heap[parent] || 0;
        if (currentValue < parentValue) {
          //swap
          [this.heap[current], this.heap[parent]] = [
            this.heap[parent],
            this.heap[current]
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
  print() {
    console.log(this.heap);
  }
  peek() {
    return this.heap[0];
  }
    length(){
        return this.heap.length;
    }
  remove() {
    if (this.heap.length > 0) {
      let smallest = this.heap[0];
      if (this.heap.length == 2) {
        this.heap[0] = this.heap[1];
        this.heap.splice(1);
      } else if (this.heap == 1) {
        this.heap = [];
      } else {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);
        let current = 0;
        while (true) {
          let currentValue = this.heap[current];
          let leftChild = 2 * current;
          let rightChild = leftChild + 1;
          if (this.heap[leftChild] && currentValue > this.heap[leftChild]) {
            [this.heap[current], this.heap[leftChild]] = [
              this.heap[leftChild],
              this.heap[current]
            ];
            current = leftChild;
          } else if (
            this.heap[rightChild] &&
            currentValue > this.heap[rightChild]
          ) {
            [this.heap[current], this.heap[rightChild]] = [
              this.heap[rightChild],
              this.heap[current]
            ];
            current = rightChild;
          } else {
            break;
          }
        }
      }
      return smallest;
    }
  }
}