/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // keep track of remainding number (target - num) in an object
    // through each iteration, check if num exists in object
    // if so, return [object key, num]
    // else add new key to object as target - num
    const lookup = {};
    for (let i = 0; i < nums.length; i++) {
        if (lookup[nums[i]] !== undefined) return [lookup[nums[i]], i];
        lookup[target - nums[i]] = i;
    }
};

