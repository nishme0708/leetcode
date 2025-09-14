/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
    let oc = image[sr][sc];
    if(oc==color) {
        return image
    }
    function bfs() {
        let queue = [[sr, sc]]
        while (queue.length) {
            let [i, j] = queue.shift();

            if (image[i][j] == oc) {
                image[i][j] = color;
                for (let item of dir) {
                    let [x, y] = item;
                    let [ux, uy] = [i + x, j + y];
                    if (ux < 0 || uy < 0 || ux >= image.length || uy >= image[0].length) {
                        continue;
                    }
                    queue.push([ux, uy])

                }
            }
        }
    }
    bfs()
    return image;
};