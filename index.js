/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var binarySearch = function(nums, target) {
  let start = 0;
  let end = (nums.length -1);
  while(start<=end) {
    let middle = Math.floor((start + end)/2);
    if(nums[middle] === target) {
      return middle;
    } else if(nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
binarySearch([1,2, 3, 4,5 ,6 ,7, 8, 9 , 10], 100);