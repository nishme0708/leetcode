/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let graph = {};
    for(let i=0;i<words.length;i++) {
        for(let j=0;j<words[i].length;j++) {
            if(!graph[words[i][j]]) {
                graph[words[i][j]] = [];
            }
        }
    }
    for(let i =0;i<words.length-1;i++) {
        let one = words[i];
        let two = words[i+1];
        let start = 0;
        if(one.length > two.length && one.startsWith(two)) {
            return '';
        }
        while(start<one.length && start<two.length) {
            if(one[start]==two[start]) { start++}
            else {
                let a = one[start];
                let b = two[start];                
                graph[a].push(b);
                break;
            }
        }
    }
    console.log(graph);
    let visited = {};
    let marked = {};
    let str = '';
    let cycle = false;
    function visit(n) {
        if(marked[n] || cycle) return;
        if(visited[n]) {
            cycle = true;
            return;
        }
        visited[n] = true;
        for(let i of graph[n]) {
            visit(i);
        }
        marked[n] = true;
        str= n+str;
        
    }
    for(let i in graph) {
        visit(i);
    }
    return cycle ? '' : str;
};

