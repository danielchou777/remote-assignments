function twoSum(nums, target) {
  // your code here
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    // check if the complement of number is in dict
    const position = dict[target - nums[i]];
    if (position || position === 0) {
      return [position, i];
    } else {
      // if not, store number and position as key-value pair in dict
      dict[nums[i]] = i;
    }
  }

  // if elements don't exist
  return -1;
}
/*
  For example:
  twoSum([2, 7, 11, 15], 9);
  Should returns:
  [0, 1]
  Because:
  nums[0]+nums[1] is 9
*/
console.log(twoSum([2, 7, 11, 15], 9));
