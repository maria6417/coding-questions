/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const tracker = {};
    const overlap = [];
    nums1.forEach((el) => tracker[el] = tracker[el] ? tracker[el] + 1 : 1);
    nums2.forEach((el) => {
       if (tracker[el]) {
           overlap.push(el);
           tracker[el]--;
       } 
    })
    return overlap
};