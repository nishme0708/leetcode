/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let map = new Map();
    let max;
    for(let i =0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            let key = i+'-'+j;
            if(!map.has(key)) {
                let total = traverse(matrix,map,i,j);
                if(!max) max = total;
                else max = Math.max(max,total);
            }
        }
    }
    // console.log(map);
    return max;
};

function traverse(matrix,map,i,j) {
    let key = i+'-'+j;
	if(map.has(key)) return map.get(key);
	let value = matrix[i][j];
	let total = 1;
	let a = 0,b=0,c=0,d=0;
	if(checkValid(matrix,i+1,j,value)) {
		a =traverse(matrix,map,i+1,j);
	}
	if(checkValid(matrix,i,j+1,value)) {
		b =traverse(matrix,map,i,j+1);
	}
	if(checkValid(matrix,i,j-1,value)) {
		c=traverse(matrix,map,i,j-1);
	}
	if(checkValid(matrix,i-1,j,value)) {
		d=traverse(matrix,map,i-1,j);
	}
	total = total + Math.max(a,b,c,d);
	map.set(key,total);
	return total;

}
function checkValid(matrix,i,j,value) {
	if(i>=0 && j>=0 && i<matrix.length && j<matrix[i].length) {
		if(matrix[i][j] > value) return true;
	}
	return false;
} 