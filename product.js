const product = (nums) => {
    if (nums.length === 0) {
        return 1
    };
    return nums[0] * product(nums.slice(1));
}

console.log(product([2, 3, 4]));