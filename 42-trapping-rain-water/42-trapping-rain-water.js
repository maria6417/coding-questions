/**
 * @param {number[]} height
 * @return {number}
 */

// I: array
// O: integer
// C: 
// E: 

// strategy
// two pointer solution: left & right
// count the water where it is able to trap water
// -> left is bigger than 0
// -> right pointer should start at left + 2, if right pointer exceeds length, return count
// and increment until right + 1 is not bigger than itself

// how to count water
// take the min of left & right (container height)
// for each index between left & right, add min - value of index to sum
// then reset left = right.


var trap = function(height) {
//     // declare count, initialize with 0
//     let count = 0;
//     // declare left pointer as the first non-0 integer in height
//     let l = 0;
//     while (height[l] === 0) {
//         l++;
//     }
//     r = l + 2;
//     // declare right pointer as left + 2
//     // while right is smaller than height length
    
//     // l = 3
//     // r = 5
//     while (r < height.length) {
//         if (height[r] === 0 || height[r] < height[r + 1]) {
//             r++;
//             continue;
//         }
//         const minHeight = Math.min(height[l], height[r]); //3
//         for (let i = l + 1; i < r; i++) {
//             count += minHeight - height[i]; // 4
//         }
//         l = r;
//         r = l + 2;
//     }
//         // if right + 1 value is bigger than self, increment right and continue
//         // otherwise, count the water
//         // take min of left & right
//         // for each index between left & right iterate
//             // add to sum min - value
//         // set left = right
//         // right = left + 2
//     return count;
//     // return count
    
    let maxL = 0;
    let maxR = 0;
    let count = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        maxL = Math.max(height[l], maxL);
        maxR = Math.max(height[r], maxR);
        if (maxL > maxR) {
            r--;
            if (l < r && maxR - height[r] > 0) {
                count += maxR - height[r];
            }
        } else {
            l++;
            if (l < r && maxL - height[l] > 0) {
                count += maxL - height[l];
            }
        }
    }
    return count;
};