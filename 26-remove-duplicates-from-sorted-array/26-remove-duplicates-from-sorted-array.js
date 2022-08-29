/**
 * @param {number[]} nums
 * @return {number}
 */
// I: integer array (sorted in non-decreasing order)
// O: k (number of unique values) & modification in nums
// C: O(1) extra memory
// E: 

// should be replaced inplace, 
// two pointers
// one that iterates through the array
// one that keeps track of where the last + 1 index of the unique elements 
// (which will be used to swap elements when found a unique value)

// starting off both from 0
// iterate, check if current is unique
// if so, we will replace that element at position 2nd pointer
// once the iteration completes, we will return 2nd pointer

var removeDuplicates = function(nums) {
    let uniqueIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            // unique
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }
    
    return uniqueIndex;
};
