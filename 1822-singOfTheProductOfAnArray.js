// 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：

// 如果 x 是正数，返回 1 。
// 如果 x 是负数，返回 -1 。
// 如果 x 是等于 0 ，返回 0 。
// 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。

// 返回 signFunc(product) 。

// 输入：nums = [-1,-2,-3,-4,3,2,1]
// 输出：1
// 解释：数组中所有值的乘积是 144 ，且 signFunc(144) = 1

var arraySign = function(nums) {
    let temSum = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            return 0
        } else if (nums[i] < 0) {
            temSum *= -1
        }else{
            continue
        }
    }
    return temSum
};
console.log(arraySign([-1, 1, -1, 1, -1]));