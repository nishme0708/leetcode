/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
    const frees = new Heap((a,b)=>a.weight - b.weight || a.index - b.index);
    const used = new Heap((a,b)=>a.aTime - b.aTime || a.weight - b.weight || a.index - b.index);
    for(let i=0;i<servers.length;i++) {
        frees.push({weight:servers[i],index:i,aTime:0})
    }
    const res = [];
    for(let i=0;i<tasks.length;i++) {
        while(used.size() && used.peak().aTime <=i) {
            frees.push(used.pop())
        }
        const s = frees.pop() || used.pop();
        res.push(s.index);
        const aTime = Math.max(i,s.aTime);
        s.aTime = aTime + tasks[i];
        used.push(s);
    }
    return res;
    
};

class Heap {
    constructor(compareFunc) {
        this.store = [];
        this.compareFunc = compareFunc;
    }
    peak(){
        return this.store[0];
    }
    size(){
        return this.store.length;
    }
    pop(){
        if(this.size()<2){
            return this.store.pop();
        }
        const res = this.store[0];
        this.store[0] = this.store.pop();
        this.heapDown(0);
        return res;
    }
    push(val) {
        this.store.push(val);
        this.heapUp(this.size()-1)
    }
    heapUp(child) {
        while(child) {
            const parent = Math.floor((child-1)/2);
            if(this.shouldSwap(child,parent)) {
                [this.store[child],this.store[parent]] = [this.store[parent],this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }
    heapDown(parent) {
        while(true) {
            let [child,child2] = [1,2].map((x)=>parent*2+x).filter(x=>x<this.size());
            if(this.shouldSwap(child2,child)) {
                child = child2
            }
            if(this.shouldSwap(child,parent)) {
                [this.store[child],this.store[parent]] = [this.store[parent],this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    shouldSwap(child, parent) {
    return (
      child && this.compareFunc(this.store[child], this.store[parent]) < 0
    );
  }
}