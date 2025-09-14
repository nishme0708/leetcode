// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */
class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, edges) {
        {
  function getList() {
    let g = {};
    for (let edge of edges) {
      let [a, b] = edge;
      if (!g[a]) {
        g[a] = [];
      }
      if (!g[b]) {
        g[b] = [];
      }
      g[a].push(b);
    }
    return g;
  }

  function dfs(i) {
    if (seen[i] && path[i]) {
      return true;
    }
    seen[i] = true;
    if (!g[i]?.length) return false;
    for (let j of g[i]) {
      path[i] = true;
      if (dfs(j)) {
        return true;
      }
      path[i] = false;
    }
    return false;
  }

  let g = getList();
  let seen = Array(V).fill(false);
  let path = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!seen[i] && dfs(i)) {
      return true;
    }
  }
  return false;
}
            
        }
    }
