// // 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// // 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// // 假设环境不允许存储 64 位整数（有符号或无符号）。

// // 示例 1：

// // 输入：x = 123
// // 输出：321

// // 示例 2：

// // 输入：x = -123
// // 输出：-321

// // 示例 3：

// // 输入：x = 120
// // 输出：21

// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function (x) {
    if (!x) return x
    if (x > 0) {
        if (!(x % 10)) {
            return ((x / 10).toString()).split('').reverse().join('') > Math.pow(2, 31) - 1 ? 0 : ((x / 10).toString()).split('').reverse().join('')
        }
        return (x.toString()).split('').reverse().join('') > Math.pow(2, 31) - 1 ? 0 : (x.toString()).split('').reverse().join('')
    } else {
        if (!(Math.abs(x) % 10)) {
            return -((Math.abs(x) / 10).toString()).split('').reverse().join('') < Math.pow(-2, 31) ? 0 : -((Math.abs(x) / 10).toString()).split('').reverse().join('')
        }
        return -(Math.abs(x).toString()).split('').reverse().join('') < Math.pow(-2, 31) ? 0 : -(Math.abs(x).toString()).split('').reverse().join('')
    }
};
console.log(reverse(
    1534236469));
// console.log(9646324351<(2**33)-1);