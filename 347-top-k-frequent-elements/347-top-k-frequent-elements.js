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
    
    // { 3: 1}
    // define array by order of value bigger to smaller
    const result = [];
    // while array length is smaller than k
    while (result.length < k) {
        let max = -Infinity;
        let maxKey = -1;
        for (let key in tracker) {
            if (tracker[key] > max) {
                max = tracker[key];
                maxKey = key;
            }
        }
        result.push(maxKey);
        delete tracker[maxKey];
    }
    // iterate through object
    // get key with max value
    // push to array
    return result;
    // return array
    
    // // declare result array
    // const result = [];
    // // [1, 2]
    // // iterate through the object, check if the value is equal to or larger than k
    // for (let key in tracker) {
    //     if (tracker[key] >= k) {
    //         result.push(key);
    //     }
    // }
    // // if so, push key to result array
    // return result;
    // // return result array
};