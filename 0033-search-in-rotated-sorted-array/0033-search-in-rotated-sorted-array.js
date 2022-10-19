/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // if target is smaller than middle, and smaller than most left, then keep searching right side
        // if target is greater than middle, and greater than most right, keep searching left side
        // otherwise left
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (target < nums[mid] && nums[left] > nums[mid]) {
            right = mid - 1;
        } else if (target < nums[mid] && target < nums[left]) {
            left = mid + 1;
        } else if (target > nums[mid] && nums[right] < nums[mid]) {
            left = mid + 1;
        } else if (target > nums[mid] && target > nums[right]) {
            right = mid - 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

search([4,5,6,7,0,1,2], 0)