/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = {};
    for(let index = 0;index<equations.length;index++) {
        let eq = equations[index];
        let val = values[index];
        let [start,end] = eq;
        if(!graph[start]) graph[start] = [];
        if(!graph[end]) graph[end] = [];
        graph[start].push([end,val]);
        graph[end].push([start,1/val]);
    }
    let res = [];
    for(let query of queries) {
        let [start,end] = query;
        res.push(bfs(graph,start,end))
    }
    // console.log(graph);
    return res;
};

function bfs(graph,start,end){
    let queue = [[start,1]];
    let visited = new Map();                 
    while(queue.length) {
        let item = queue.shift();
        let [val,dist] = item;
        if(!visited.has(val)) {
            visited.set(val,true);
           
            if(graph[val]){
              if(val == end){                 
                return dist
               };
                for(let graphItem of graph[val]) {
                    queue.push([graphItem[0],graphItem[1]*dist])
                }
            }
        }                      
    }
    return -1;
}