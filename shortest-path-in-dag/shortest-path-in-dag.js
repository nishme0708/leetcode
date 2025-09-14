class Solution {
    shortestPath(V, E, edges) {
        // code here.
        let seen = Array(V).fill(false)
        
        let res = [];
        let indeg = Array(V).fill(0)
        let g = getList()
  
        function getList(){
            let g = {}
            for(let item of edges) {
                let [a,b,c] = item;
                if(!g[a]) {
                    g[a] = [];
                }
                g[a].push([b,c]);
                indeg[b]++;
            }
            return g;
        }
        let q = [];
        indeg.forEach((v,i)=>{
            if(v==0) {
                q.push(i)
            }
        })
        while(q.length) {
            let item = q.shift();
            res.push(item);
            if(!g[item]) {
                continue;
            }
            for(let i of g[item]) {
                indeg[i[0]]--;
                if(indeg[i[0]] == 0) {
                    q.push(i[0])
                }
            }
        }
        let dist = Array(V).fill(Infinity);
        dist[0] = 0;
  
        for(let i of res) {
            if(dist[i] == Infinity) {
                continue;
            }
            let d = dist[i];
            if(g[i]) {
                for(let j of g[i]) {
                    let [a,b] = j;
                    dist[a] = Math.min(dist[a], b+d)
                }
            }
        }
        return dist.map(d=>d==Infinity?-1:d)
        
    }
}
