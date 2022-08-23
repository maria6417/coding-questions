// You are given a list of integers nums of even length. Consider an operation where you pick any number in nums and update it with a value between [1, max(nums)].

// Return the minimum number of operations required such that for every i, nums[i] + nums[n - 1 - i] equals to the same number.

// Constraints

// n ≤ 100,000 where n is the length of nums
// 1 ≤ nums[i] ≤ 10,000

class Solution {
  solve(nums) {
    debugger;
      // find the max number in the array, and its index
      const max = Math.max(...nums);
      const maxIdx = nums.indexOf(max);
      // with the index, we will set it and its pair as a target
      const target = nums[maxIdx] + nums[nums.length - 1 - maxIdx];
      // declare operationCount
      let operationCount = 0;
      // iterate through the array from 0 to half of the array
      for (let i = 0; i < nums.length / 2; i++) {
          // check if the sum of two is equal to target
          const first = nums[i];
          const second = nums[nums.length - 1 - i];
          if (first + second > target) {
              operationCount++;
              // if bigger then get bigger index and set it to target - otherone
              if (first >= second) {
                const temp = target - second;
                if (temp < 1) {
                  nums[i] = 1;
                  nums[nums.length - 1 - i] = target - 1;
                  operationCount++;
                } else {
                  nums[i] = temp;
                }
              } else {
                  const temp = target - second;
                  if (temp < 1) {
                    nums[nums.length - 1 - i] = 1;
                    nums[i] = target - 1;
                    operationCount++;
                  } else {
                    nums[nums.length - 1 - i] = temp;
                  }
              }
          } else if (first + second < target) {
              operationCount++;
              if (first <= second) {
                const temp = target - second;
                if (temp > max) {
                  nums[i] = max;
                  nums[nums.length - 1 - i] = target - nums[i];
                  operationCount++;
                } else {
                  nums[i] = temp;
                }
              } else {
                  const temp = target - second;
                  if (temp > max) {
                    nums[nums.length - 1 - i] = max;
                    nums[i] = target - max;
                    operationCount++;
                  } else {
                    nums[nums.length - 1 - i] = temp;
                  }
              }
          }
      }

      return operationCount
  }
}

const solution = new Solution();
const nums = [3, 2, 1, 2];
console.log(solution.solve(nums));
