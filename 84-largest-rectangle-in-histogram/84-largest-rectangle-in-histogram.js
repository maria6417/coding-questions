/**
 * @param {number[]} heights
 * @return {number}
 */
// keep track of max
// generate a stack that holds the starting index (where it can extend itself) and its number
// iterate through the heights
    // if the top of the stack is bigger than itself, calculate the max, being...
    // the current index - index
    // continue doing so until the top of the stack is smaller or equal to self
    // then append itself to the stack 
        // if bigger than top, then just its index
        // if popped any, index would begin at the last popped index
    
// iterate through the stack    
    // calculate max

var largestRectangleArea = function(heights) {
    let max = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        let index = i;
        while (stack.length && stack[stack.length - 1][1] >= heights[i]) {
            // pop from stack and calculate max
            let popped = stack.pop();
            max = Math.max(max, (i - popped[0]) * popped[1]);
            // update index to popped index
            index = popped[0];
        }
        stack.push([index, heights[i]]);
    }
    
    while (stack.length) {
        let popped = stack.pop();
        max = Math.max(max, (heights.length - popped[0]) * popped[1]);
    }
    
    return max
};