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
    
    // sort, check if next element is duplicate
    // nums = nums.sort();
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === nums[i+1]) return true;
    // }
    // return false;
};