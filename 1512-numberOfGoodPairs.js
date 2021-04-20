// 给你一个整数数组 nums 。
// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
// 返回好数对的数目

// 输入：nums = [1,2,3,1,1,3]
// 输出：4
// 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
var numIdenticalPairs = function(nums) {
    let temSum = 0; // 计数器
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                temSum++
            }
        }
    }
    return temSum
};
console.log(numIdenticalPairs([1,2,3,1,1,3]));