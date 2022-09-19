/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // declare a tracker object
    const tracker = {};
    // iterate through nums, and count each element to tracker object
    for (let num of nums) {
        tracker[num] = (tracker[num] | 0) + 1;
    }
    
    // declare array
    const count = [];
    // iterate through tracker
    for (let key in tracker) {
        count[tracker[key]] ? count[tracker[key]].push(key) : count[tracker[key]] = [key];
    }
    console.log(count);
    // on index of array of the value, set value as an array of key of tracker (or push if exists)
    
    // declare array
    const result = [];
    // the max index of the array is the max, so pop element out and push to result array k times
    while (result.length < k) {
        const popped = count.pop();
        if (popped) {
            result.push(...popped);
        }
    }
    
    return result;
    
};