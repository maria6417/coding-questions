/**
 * @param {number[]} height
 * @return {number}
 */
// I: array
// O: integer
// C: cannot slant the container
// E: 

// strategy
// two pointer solution, left & right
// (r - l) * min(height[r], height[l])
// how to know whether to increment l or decrement r ?? 
// the smaller value should increment or decrement
// continue doing so until l < r
var maxArea = function(height) {
    let max = 0;
    let l = 0, r = height.length - 1;
    while (l < r) { // l = 1, r = 6
        max = Math.max(max, (r - l) * Math.min(height[l], height[r])); // 49
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return max;
};