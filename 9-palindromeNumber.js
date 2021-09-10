// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 示例 1：

// 输入：x = 121
// 输出：true

// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 正序
    let positiveSequence = [];
    // 倒序
    let reverseOrder = [];
    x = x.toString();
    for (let i = 0; i < x.length; i++) {
        positiveSequence.push(x[i]);
        reverseOrder.unshift(x[i]);
    }
    if (positiveSequence.toString() == reverseOrder.toString()) {
        return true;
    } else {
        return false;
    }
};
isPalindrome(-112);
