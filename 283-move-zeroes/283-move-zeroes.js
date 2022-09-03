/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// keep track of 2 indexes
// one that iterates & checks if number is zero
// one that keeps track of where the next non-zero number is to be inserted

// iterate through nums
// if num equals 0, then continue iteration
// if num does no equal 0, then swap with non-zero index & increment

var moveZeroes = function(nums) {
    let insertIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = 0;
            nums[insertIndex] = temp;
            insertIndex++;
        }
    }
};