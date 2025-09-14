/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let n = graph.length;
    let seen = Array(n).fill(false)
    let path = Array(n).fill(false)
    let cycle = Array(n).fill(false);
    for(let i=0;i<n;i++) {
        if(!seen[i]) {
            dfs(i)
        }
    }
    let res = [];
    console.log(cycle)
    for(let i=0;i<cycle.length;i++) {
        if(!cycle[i]) {
            res.push(i)
        }
    }
    return res

    function dfs(i) {
        if(seen[i]) {
            if(path[i]) {
                return true;
            }
            return false;
        }
        seen[i] = true;
        for(let j of graph[i]) {
            path[i] = true;
            let val = dfs(j)
            if(val) {
                cycle[i] = true;
                return true;
            }
            path[i] = false;
        }
        return false;
    }
};