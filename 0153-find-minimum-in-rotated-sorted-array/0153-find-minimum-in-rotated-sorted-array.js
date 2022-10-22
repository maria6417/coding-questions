/**
 * @param {number[]} nums
 * @return {number}
 */

// where the sorted array starts at
// = find the pivot.
// L & R pointer
// binary search
// if m > m + 1 || 0th index, return m + 1 or 0
// if m < m - 1 || max length - 1, return m - 1 or max length - 1

// otherwise, continue binary search
// if m < r : look at left side
// if m > l : look at right side

var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] > (nums[m + 1] !== undefined ? nums[m + 1] : nums[0])) {
            return nums[m + 1] !== undefined ? nums[m + 1] : nums[0];
        }
        if (nums[m] < (nums[m - 1] !== undefined ? nums[m - 1] : nums[nums.length - 1])) {
            return nums[m]
        }
        if (nums[m] < nums[r]) {
            r = m - 1;
        } else if (nums[m] > nums[l]) {
            l = m + 1;
        } else {
            console.log('here', nums[m]);
            r = m - 1;
        }
    }
    
    // if a code reaches here, l and r are equal, meaning that is the min
    return nums[l];
};

findMin([9,0,2,7,8]);