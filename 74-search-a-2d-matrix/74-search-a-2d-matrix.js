/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 2 step binary search
// 1st step, find the right row to look at.
    // get the mid point
    // if mid row 0th index is smaller than target, change min to mid + 1 and continue
    // if min = max then that is the row to target
// 2nd step, do the normal binary search on that target row
var searchMatrix = function(matrix, target) {
    let targetRow;
    let min = 0, max = matrix.length - 1;
    while (min < max) {
        let mid = Math.floor((max + min) / 2);
        if (matrix[mid][0] === target) return true;
        if (matrix[mid][matrix[mid].length - 1] < target) {
            min = mid + 1;
        } else if (matrix[mid][0] > target) {
            max = mid - 1;
        } else {
            targetRow = mid;
            break;
        }
    }
    if (targetRow === undefined) targetRow = min;
    min = 0, max = matrix[min].length - 1;
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (matrix[targetRow][mid] === target) return true;
        if (matrix[targetRow][mid] < target) min = mid + 1;
        if (matrix[targetRow][mid] > target) max = mid - 1;
    }
    return false;
};

// searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11);