/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
    topoSort(V, edges) {
        // code here
         function getList(){
            let g = {}
            for(let item of edges) {
                let [a,b] = item;
                if(!g[a]) {
                    g[a] = [];
                }
                g[a].push(b);
                
            }
            return g;
        }
        let g = getList()
        let seen = Array(V).fill(false)
        let res = [];
        
        for(let i =0;i<V;i++) {
            if(!seen[i]) {
                dfs(i)
            }
        }
        return res.reverse()
        function dfs(n){
            if(seen[n]) {
                return;
            }
            seen[n]= true;
            if(g[n]){
               for(let i of g[n]) {
                   dfs(i)
               } 
            }
            res.push(n)
        }
    }
}
