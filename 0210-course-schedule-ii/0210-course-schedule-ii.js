/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */



var findOrder = function (numCourses, prerequisites) {
  let graph = {};
  for (let pre of prerequisites) {
    let [end, start] = pre;
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
  }
  console.log(graph);
  let visited = {};
  let res = [];
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      let r = traverse(i, graph, visited);
      if (r) return [];
    }
  }

  function traverse(start, graph, visited) {
    visited[start] = 1;
    if (graph[start]?.length) {
      for (let node of graph[start]) {
        if (visited[node] == 1) return true;
        if (!visited[node]) {
          let r = traverse(node, graph, visited);
          if (r) {
            return true;
          }
        }
      }
    }
    visited[start] = 2;
    res.push(start);
    return false;
  }

  return res.reverse();
};