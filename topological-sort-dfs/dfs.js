/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
    topoSort(V, edges) {
        // code here
        //reverse the order 
        let seen = Array(V).fill(false)
        
        let res = [];
        let g = getList()
  
        function getList(){
            let g = {}
            for(let item of edges) {
                let [a,b] = item;
                if(!g[b]) {
                    g[b] = [];
                }
                g[b].push(a);
            }
            return g;
        }
        function dfs(n){
            if(seen[n]) {
                return;
            }
            seen[n]=true;
            
            if(!g[n]) {
                res.push(n)
                return;
            }
            for(let i of g[n]) {
                dfs(i)
            }
            res.push(n)
        }
        for(let i=0;i<V;i++) {
            if(!seen[i]) {
                dfs(i)
            }
        }

        return res;
    }
}
