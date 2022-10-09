/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// define min & max index , init to 0 & last index of nums
// while min is smallere than max continue...
// determine mid index
// check if mid element eqauls target, if so return index
// if smaller, set max to mid - 1
// if bigger set min to mid + 1
// if nothing was returned return -1

var search = function(nums, target) {
    let min = 0, max = nums.length - 1;
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) max = mid - 1;
        if (nums[mid] < target) min = mid + 1;
    }
    return -1;
};