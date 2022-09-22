/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// I: array and integer
// O: array
// C: O(n) space
// E: 

// strategy
// use two pointer solution
// left & right pointer
// while left < right
// add left + right index position,
// if sum equals target, return [left, right]
// if sum is bigger than target, subtract right
// if sum is smaller than target, add left

var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l < r) {
        let sum = numbers[l] + numbers[r];
        if (sum === target) return [l + 1, r + 1];
        if (sum > target) r--;
        if (sum < target) l++;
    }
};