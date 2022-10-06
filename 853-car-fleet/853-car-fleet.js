/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
// sort the position and speed by [[pos, speed], ...]
// for each postion, check the amount of time that'll take to get to target
// if there's an existing stack, check the top of the stack and check if it is faster than top
// if so, it means it will merge. so keep the current stack and dont append. 
// otherwise append to stack

// lastly return the lenght of stack

var carFleet = function(target, position, speed) {
    let sorted = position.map((e, i) => [e, speed[i]]);
    sorted.sort((a, b) => b[0] - a[0]);
    
    let stack = [];
    
    for (let i = 0; i < sorted.length; i++) {
        let remain = (target - sorted[i][0]) / sorted[i][1];
        if (!stack.length || stack[stack.length - 1] < remain) {
            stack.push(remain);
        }
    }
    
    return stack.length;
};

