
function twoSum(nums: number[], target: number): number[] {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in seen) {
            return [seen[diff], i]
        } else {
            seen[nums[i]] = i;
        }
    }
};