/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let total = 0;
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            if(grid[i][j] =='1') {
                total++;
                traverse(grid,i,j);
            }
        }
    }
    return total;
    
};

function traverse(grid,i,j) {
    if(i>=0 && i<grid.length && j>=0 && j<grid[i].length) {
        if(grid[i][j] == '1') {
            grid[i][j] = '0';
            traverse(grid,i+1,j);
            traverse(grid,i,j+1);
            traverse(grid,i-1,j);
            traverse(grid,i,j-1);
        }
    }
}