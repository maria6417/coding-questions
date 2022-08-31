/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // for (let i = 0; i < k; i++) {
    //     const temp = nums.pop();
    //     nums.unshift(temp);
    // }
    
    if (nums.length === 1) return;
    k %= nums.length;
    
//     const reverse = (arr, start, end) => {
//         while (start < end) {
//             const temp = nums[start];
//             nums[start] = nums[end];
//             nums[end] = temp;
//             start ++;
//             end --;
//         }
//     };
    
//     // reverse the array 
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
    
    const temp = nums.splice(0, nums.length - k);
    nums.push(...temp);
};