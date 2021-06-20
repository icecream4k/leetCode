// 输入：s = "1101"
// 输出：true
// 解释：
// 由 1 组成的最长连续子字符串的长度是 2："1101"
// 由 0 组成的最长连续子字符串的长度是 1："1101"
// 由 1 组成的子字符串更长，故返回 true 。

// 输入：s = "111000"
// 输出：false
// 解释：
// 由 1 组成的最长连续子字符串的长度是 3："111000"
// 由 0 组成的最长连续子字符串的长度是 3："111000"
// 由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。

// 输入：s = "110100010"
// 输出：false
// 解释：
// 由 1 组成的最长连续子字符串的长度是 2："110100010"
// 由 0 组成的最长连续子字符串的长度是 3："110100010"
// 由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let var0array = [];
    let var1array = [];
    let var0number = '';
    let var1number = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '0') {

        } else if (s[i] == '1') {

        }
    }
    console.log(`1的数组${var1array}`);
    console.log(`0的数组${var0array}`);
};
checkZeroOnes(`110100010`)