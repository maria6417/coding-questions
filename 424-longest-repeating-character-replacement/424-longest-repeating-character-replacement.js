/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// two pointer sliding window
// "A" -> {A: 1} -> most freq = "A", if length - freqCount <= k, then valid. increment right pointer
// "AB" -> {A: 1, B: 1}
// once it reaches a point where length - freqCount <= k, then delete left index letter count from freq counter, and increment left

// Input: s = "ABAB", k = 2
var characterReplacement = function(s, k) {
    const freq = {}; //{A: 1, B:1}
    let maxSeq = 0;
    let left = 0, right = 0; //1
    freq[s[right]] = (freq[s[right]] | 0) + 1;
    while (left < s.length && right < s.length) { //0
        // check which letter is most freq
        let max = 0; //1
        let maxLetter = ''; //"A"
        for (let key in freq) {
            if (max <= freq[key]) {
                max = freq[key];
                maxLetter = key;
            }
        }
        
        if (right + 1 - left - max <= k) {
            maxSeq = Math.max(maxSeq, right + 1 - left);
            right++;
            freq[s[right]] = (freq[s[right]] | 0) + 1;
        } else {
            freq[s[left]]--;
            left++;
        }
    }
    return maxSeq;
};

characterReplacement("AABABBA", 1);