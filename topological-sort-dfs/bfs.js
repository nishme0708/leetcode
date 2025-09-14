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
        let indeg = Array(V).fill(0)
        let g = getList()
  
        function getList(){
            let g = {}
            for(let item of edges) {
                let [a,b] = item;
                if(!g[a]) {
                    g[a] = [];
                }
                g[a].push(b);
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
                indeg[i]--;
                if(indeg[i] == 0) {
                    q.push(i)
                }
            }
        }
        
        
        

        return res;
    }
}
