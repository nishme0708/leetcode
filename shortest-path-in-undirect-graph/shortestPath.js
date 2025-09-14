function shortestPath(adj, src) {

        // code here
        let g = adj;
        let dist = Array(g.length).fill(Infinity)
        dist[src] = 0;
        let q = [[src,0]];

        while(q.length) {
            let [n,w] = q.shift();
            dist[n] = Math.min(dist[n], w);
            if(g[n]) {
                for(let i of g[n]) {
                    if(dist[i]==Infinity || dist[i]>w+1) {
                        q.push([i,w+1])
                    }
                }
            }
        }
        return dist.map(d=>d==Infinity?-1:d)
    }
