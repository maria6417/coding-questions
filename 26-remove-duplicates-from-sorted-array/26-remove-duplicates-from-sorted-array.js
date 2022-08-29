/**
 * @param {number[]} nums
 * @return {number}
 */
// I: integer array (sorted in non-decreasing order)
// O: k (number of unique values) & modification in nums
// C: O(1) extra memory
// E: 

// should be replaced inplace, 
// iterate through the nums
// check if it equals '_', if so break the iteration
// if number equals the previous number (if any), then splice it, and then push '_'
// if not, increment pointer and proceed with iteration

var removeDuplicates = function(nums) {
    console.log(nums);
    let index = 0;
    while (nums[index] !== '_' && index !== nums.length) {
        if (index !== 0 && nums[index] === nums[index - 1]) {
            nums.splice(index, 1);
            nums.push('_');
        } else {
            index++;
        }
    }
    return index;
};
