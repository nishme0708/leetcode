/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = {};
  let inDegree = Array(numCourses).fill(0);
  for (let pre of prerequisites) {
    let [end, start] = pre;
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
    inDegree[end]++;
  }
  let queue = [];
  for (let index = 0;index<inDegree.length;index++) {
    let item = inDegree[index];
    if (item == 0) {
      queue.push(index);
    }
  }
  let res = [];
  while (queue.length) {
    let item = queue.shift();
    if (graph[item]) {
      for (let node of graph[item]) {
        inDegree[node]--;
        if (inDegree[node] == 0) {
          queue.push(node);
        }
      }
    }
    res.push(item);
  }
  return res.length == inDegree.length ? res : [];
};