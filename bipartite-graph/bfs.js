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
        
        function bfs(n) {
            let q = [n];
            vis[n] = 0;
            //console.log(n,g)
            while(q.length) {
                let item = q.shift();
                //console.log('item',item,vis)
                for(let e of g[item] || []) {
                    let v = vis[item] == 1 ? 0 : 1; 
                    if(vis[e] == -1) {
                        vis[e] = v;
                        q.push(e)
                    } else {
                        if(vis[e] == v) {
                            continue;
                        }
                        return false;
                    }
                }
            }
            return true;
        }
        
        let vis = Array(V).fill(-1);
        for(let i=0;i<V;i++) {
            if(vis[i] == -1) {
                let v = bfs(i,-1)
                if(!v) {
                    return false;
                }
            }
        }
        return true;
        
    }
}
