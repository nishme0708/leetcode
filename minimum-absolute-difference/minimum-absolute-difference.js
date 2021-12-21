/**
 * @param {number[]} arr
 * @return {number[][]}
 */
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
         arr.sort((x, y) => x - y);

    let res = {};
    let min;
    for( let index = 0;index<arr.length -1 ;index++) {
        let first = arr[index];
        let next = arr[index+1];
        let diff = next - first;
        if(!(min && min<diff)){
            min = diff;
            if(!res[diff]) {
                res[diff] =[];
            }
            res[diff].push([first,next]);
        }
    }
    
    return res[min];
};