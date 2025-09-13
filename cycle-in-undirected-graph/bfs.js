/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
    isCycle(V, edges) {
        if(V <=2) return false;
        let g = getList();
        let arr = Array(V).fill(false)
        arr[0] = true;
        for(let i=0;i<V;i++) {
            
            if(!arr[i] && bfs([[i,-1]])) {
                return true;
            }
        }
        return false;
        
        
        function bfs(q){
            while(q.length) {
                let el = q.shift();
                let [curr,prev] = el;
                arr[curr] = true;
                if(!g[curr]) {
                    continue;
                }
                for(let n of g[curr]) {
                    if(n==prev) {
                        continue;
                    }            
                    if(arr[n]) {
                        return true;
                    }
                    q.push([n,curr])
                }
            }
            return false;
        }
     function getList() {
         let g={}
         for(let edge of edges) {
             let [a,b] = edge;
             if(!g[a]) {
                 g[a] = []
             } 
             if(!g[b]) {
                 g[b] = []
             } 
             g[a].push(b)
             g[b].push(a)
         }
         return g;
     }   
    }
}
