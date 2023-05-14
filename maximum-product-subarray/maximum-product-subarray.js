/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length == 0) return 0;
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let temp_max = Math.max(num, max * num, min * num);
    min = Math.min(num, max * num, min * num);
    max = temp_max;
    result = Math.max(max, result);
    console.log(num, max, min);
  }
  return result;
};