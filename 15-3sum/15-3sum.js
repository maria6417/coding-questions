/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// I: array
// O: nested array
// C: must not contain duplicate triplets
// E: there may be no valid triplets that add up to 0

// multiple pointer
// i = 0, j, k
// while i < length - 3
// j = i+1, k = i+2
// while j < length - 2, 
    // while k < length - 1, check for sum
    // push to result if valid
    // increment k
// increment j
//[-1,0,1,2,-1,-4]
//[-4,-1,-1,0,1,2]
//          i  j k
var threeSum = function(nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++
            } else {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                };
            }
        }
    }
    return result;
};

// threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);