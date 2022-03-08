/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = {};
    let index = 0;
    for(let eq of equations) {
        let a = eq[0];
        let b = eq[1];
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        graph[a].push([b,values[index]]);
        graph[b].push([a,(1/values[index])]);
        index++;
    }
    let res = [];
    for(let q of queries) {
        
        res.push(find(graph,q[0],q[1]));
        
    }
    return res;
};

function find(graph,x,y,v={}) {
    let q = [[x,1]];
    while(q.length) {
        let [pop,dist] = q.pop();
        if(!v[pop] && graph[pop]) {
            v[pop] = true;
        if(pop==y) return dist;
        for(let item of graph[pop]) {
            q.push([item[0],item[1]*dist]);
        }
        }
    }
    return -1.0;
}