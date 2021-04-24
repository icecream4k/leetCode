// 给你两个整数，n 和 start 。

// 数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。

// 请返回 nums 中所有元素按位异或（XOR）后得到的结果

// 输入：n = 5, start = 0
// 输出：8
// 解释：数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
//      "^" 为按位异或 XOR 运算符。


var xorOperation = function(n, start) {
    let nums = new Array
    let sums = 0
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i
    }
    for (let n = 0; n < nums.length; n++) {
        sums ^= nums[n]
    }
    return sums
};
console.log(xorOperation(5, 0));