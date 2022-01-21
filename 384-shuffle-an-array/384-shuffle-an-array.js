/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.data = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.data;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr = Array(this.data.length).fill(0);
    let obj = {};
    for(let index = 0;index<this.data.length;index++) {
        let random;
        while(random==undefined || obj[random]){
            random = parseInt(Math.random() * this.data.length);
        }
        obj[random] = true;
        arr[index] = this.data[random];
    }
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */