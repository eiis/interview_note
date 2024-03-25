function searchRotatedArray(nums: number[], target: number): number {
  let left: number = 0, right: number = nums.length - 1;

  while (left <= right) {
      let mid: number = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      }

      // Check if the left half is sorted
      if (nums[left] <= nums[mid]) {
          if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          // The right half must be sorted
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }

  return -1;
}

// Test the function with the provided example
const nums: number[] = [4, 5, 6, 7, 0, 1, 2];
const target: number = 6;
console.log(searchRotatedArray(nums, target));
