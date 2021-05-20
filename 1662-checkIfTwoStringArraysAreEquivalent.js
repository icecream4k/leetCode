// 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。

// 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。

// 输入：word1 = ["ab", "c"], word2 = ["a", "bc"]
// 输出：true
// 解释：
// word1 表示的字符串为 "ab" + "c" -> "abc"
// word2 表示的字符串为 "a" + "bc" -> "abc"
// 两个字符串相同，返回 true

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let tempStr1 = new String
    let tempStr2 = new String
    for (let i = 0; i < word1.length; i++) {
        tempStr1 += word1[i]
    }
    for (let i = 0; i < word2.length; i++) {
        tempStr2 += word2[i]
    }
    if (tempStr1 === tempStr2) {
        return true
    } else {
        return false
    }
};
console.log(arrayStringsAreEqual(word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]));