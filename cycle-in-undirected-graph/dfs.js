/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
    isCycle(V, edges) {
        // Code here
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
     
     function dfs(curr,last) {
        if(arr[curr]) {
            return true;
        }
        arr[curr]=true;
        if(!g[curr]) {
            return false;
        }
        for(let el of g[curr]) {
            if(el!=last) {
                if(arr[el]) {
                    return true;
                }
                let v = dfs(el,curr)
                if(v) {
                    return true;
                }
            }
        }
        return false;
     }
     
     let arr = Array(V+1).fill(false);
     let g = getList();
     for(let i=1;i<=V;i++) {
         if(!arr[i] && dfs(i,-1)) {
             return true;
         } 
     }
     return false;
    }
}
