/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indeg = Array(numCourses).fill(0)
    let g = getList();
    let res = [];
    let q = [];
    indeg.forEach((v,i)=>{
        if(v==0) {
            q.push(i)
        }
    })
    while(q.length) {
        let item = q.shift();
        res.push(item)
        if(!g[item]) continue;
        for(let n of g[item]) {
            indeg[n]--;
            if(indeg[n]==0) {
                q.push(n)
            }
        }
    }
    return res.length == numCourses

    function getList(){
        let g = {};
        for(let edge of prerequisites) {
            let [a,b] = edge;
            if(!g[b]) {
                g[b] = [];
            }
            g[b].push(a);
            indeg[a]++;
        }
        return g;
    }
};