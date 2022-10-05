/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// keep track of appeared temperature and their index
// if the next element is larger, then it is easy ( = 1)
// otherwise, we have to keep track of all elements in between until we find a larger number

// iterate from 1th index
// check if element is larger than previous. 
    // if so fill array[i - 1] to 1, 
    // also check the tracked temperature and see if elemnt is larger than any
    // if so, fill array[index] to i - index for all the value arrays
// otherwise
    // keep track with object, key as temperature, value as array of appeared indexes

var dailyTemperatures = function(temperatures) {
//     if (temperatures.length === 1) return [0];
//     const appeared = {};
//     const result = [];
//     for (let i = 1; i < temperatures.length; i++) {
//         if (temperatures[i] > temperatures[i - 1]) {
//             result[i - 1] = 1;
//             for (let key in appeared) {
//                 if (key < temperatures[i]) {
//                     for (let j = 0; j < appeared[key].length; j++) {
//                         result[appeared[key][j]] = i - appeared[key][j];
//                     }
//                     delete appeared[key];
//                 }
//             }
//         } else {
//             appeared[temperatures[i - 1]] ? appeared[temperatures[i -1]].push(i - 1) : appeared[temperatures[i - 1]] = [i - 1];
//         }
//     }
    
//     for (let key in appeared) {
//         for (let j = 0; j < appeared[key].length; j++) {
//             result[appeared[key][j]] = 0;
//         }
//         delete appeared[key];
//     }
//     while (result.length !== temperatures.length) {
//         result.push(0);
//     }
//     return result;
    
    const stack = [];
    const result = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        // if top of stack is empty, or if top of stack > current element, assign value to same index of stack

            while (stack[stack.length - 1] < temperatures[i]) {
                result[stack.length - 1] = i - stack.length + 1;
                stack.pop();
                while(stack.length && !stack[stack.length - 1]) {
                    stack.pop();
                }
            }
        stack[i] = temperatures[i];
        // while top of stack < current element
            // assign result's index value as i - stack's top index
            // pop element out
    }
    
    while (stack.length) {
        if (stack[stack.length - 1]) {
            result[stack.length - 1] = 0;
        }
        stack.pop();
    }
    // while stack is not empty, assign 0 to result's same index
    
    return result;
};