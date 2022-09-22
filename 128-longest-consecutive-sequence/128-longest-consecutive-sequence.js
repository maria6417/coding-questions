/**
 * @param {number[]} nums
 * @return {number}
 */

// convert nums array into an object for O(1) lookup time (by iteration)
// find the first number of the sequence by checking if -1 appears
// if first number, then count +1 and check if exists
// if not exists, the count is the max seq, update accordingly
// after iteration, return max seq

var longestConsecutive = function(nums) {
    
    if (nums.length === 0) return 0;
    
    const lookup = {};
    let maxSeq = 1;
    nums.forEach(n => lookup[n] = 1);
    nums.forEach(n => {
        // check if its first number
        if (!lookup[n - 1]) {
            let seqCount = 1;
            while(lookup[n + seqCount]) {
                seqCount++;
            }
            maxSeq = Math.max(maxSeq, seqCount);
        }
    })
    
    return maxSeq;
};