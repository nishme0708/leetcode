/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(grid) {
        let n = grid.length;
    let m = grid[0].length;
    let vis = Array(n).fill().map(()=>Array(m).fill(0))
    let dis = Array(n).fill().map(()=>Array(m).fill(0))
    let row = [1,-1,0,0]
    let col = [0,0,1,-1]
    let q = [];
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            let el = grid[i][j]
            if(el==0) {
                q.push([i,j,0])
            }
        }
    }
    bfs();
    return dis;
    function bfs() {
        while(q.length) {
            let [a,b,d] = q.shift();
            console.log(a,b,d)
            if(vis[a][b] == 1) {
                continue;
            }
            vis[a][b] = 1;
            dis[a][b] = d;
            for(let i=0;i<4;i++) {
                let na = a+row[i]
                let nb = b+col[i]
                if(na < 0 || nb < 0 || na>=n || nb>=m || vis[na][nb]!=0 || grid[na][nb]==0 ) {
                    continue;
                }
                q.push([na,nb,d+1])
            }   
        }
    }
};