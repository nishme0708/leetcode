/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = 0;
    for(let i =0;i<mat.length;i++) {
        let j= mat.length - i - 1;
        if(i!=j) {
        total+=mat[i][i] + mat[i][j];
        } else {
            total+=mat[i][i];
        }
        console.log(i,j,mat[i][i],mat[j][j])
    }
    return total;
};