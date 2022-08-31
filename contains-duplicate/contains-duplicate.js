/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const tracker = {};
    for (let i = 0; i < nums.length; i++) {
        if (tracker[nums[i]]) return true;
        tracker[nums[i]] = true;
    }
    return false;
};