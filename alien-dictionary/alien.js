function findOrder(words) {
  // code here
  let g = {};
  let res = [];
  let char = new Set();

  for (let w of words) {
    for (let c of w) {
      char.add(c);
    }
  }
  let indeg = {};
  for (let item of char) {
    indeg[item] = 0;
  }

  function add(a, b) {
    if (!g[a]) {
      g[a] = [];
    }
    g[a].push(b);
    indeg[b]++;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let a = words[i];
    let b = words[i + 1];
    let n = Math.min(a.length, b.length);
    for (let j = 0; j < n; j++) {
      if (a[j] == b[j]) {
        continue;
      }
      add(a[j], b[j]);
      break;
    }
  }
  let q = [];
  for (let i in indeg) {
    if (indeg[i] == 0) {
      q.push(i);
    }
  }

  while (q.length) {
    let item = q.shift();
    res.push(item);
    if (!g[item]) {
      continue;
    }
    for (let i of g[item]) {
      indeg[i]--;
      if (indeg[i] == 0) {
        q.push(i);
      }
    }
  }
  return res.length == char.size;
}
