function getMax(nums: number[]): number {
  let maxValue = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > maxValue) {
      maxValue = nums[i]!;
    }
  }

  return maxValue;
}
