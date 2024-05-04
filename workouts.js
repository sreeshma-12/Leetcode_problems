var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length - 2; i++) {
        for (let j = 1; j <= nums.length - 1; j++) {
            if (target == nums[i] + nums[j] && i != j) {
                return [i, j];
            }
        }
    }
    return null;
};

twoSum([1, 4, 5, 0, 6], 5);
