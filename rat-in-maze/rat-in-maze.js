/**
 * @param number[][] mat
 * @returns string[]
 */
class Solution {
    // Function to find all possible paths
 ratInMaze(maze) {
  // code here
  let visited = {};
  let final = maze.length - 1;
  let res = [];
  let dir = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };

  function dfs(x, y, path, seen) {
    if (x == final && y == final) {
      res.push(path.join(""));
      return;
    }

    for (let key of Object.keys(dir)) {
      let updatedX = x + dir[key][0];
      let updatedY = y + dir[key][1];
      let visKey = updatedX + "-" + updatedY;
      if (
        updatedX > final ||
        updatedX < 0 ||
        updatedY > final ||
        updatedY < 0 ||
        maze[updatedX][updatedY] == 0 ||
        seen[visKey]
      ) {
        continue;
      }
      path.push(key);
      seen[visKey] = true;
      dfs(updatedX, updatedY, path, seen);
      seen[visKey] = false;
      path.pop(key);
    }
  }
  dfs(0, 0, [], { "0-0": true });
  return res.sort();
}

}
