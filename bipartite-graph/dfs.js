class Solution {
    isBipartite(V, edges) {
        // code here
        
        let g = getGraph();
        function getGraph(){
            let g = {}
            for(let [a,b] of edges) {
                if(!g[a]) g[a] = [];
                if(!g[b]) g[b] = [];
                g[a].push(b)
                g[b].push(a)
            }
            return g;
        }
        
        function dfs(n) {
            for(let e of g[n] || []) {
                let val = vis[n] == 1 ? 0 : 1;
                if(vis[e] == -1) {
                    vis[e] = val;
                    return dfs(e);
                } 
                if(vis[e] == val) {
                    continue;
                }
                return false;
            }
            return true;
        }
        
        let vis = Array(V).fill(-1);
        for(let i=0;i<V;i++) {
            if(vis[i] == -1) {
                vis[i] = 0;
                let v = dfs(i)
                if(!v) {
                    return false;
                }
            }
        }
        return true;
        
    }
}
