// 给你一个下标从 0 开始的字符串 s ，它的 偶数 下标处为小写英文字母，奇数 下标处为数字。
// 定义一个函数 shift(c, x) ，其中 c 是一个字符且 x 是一个数字，函数返回字母表中 c 后面第 x 个字符。

// 比方说，shift('a', 5) = 'f' 和 shift('x', 0) = 'x' 。
// 对于每个 奇数 下标 i ，你需要将数字 s[i] 用 shift(s[i-1], s[i]) 替换。

// 请你替换所有数字以后，将字符串 s 返回。题目 保证 shift(s[i-1], s[i]) 不会超过 'z' 。

// 输入：s = "a1c1e1"
// 输出："abcdef"
// 解释：数字被替换结果如下：
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let tempObj = {}
    let tempIndex = 0
    // 遍历存放26个字母
    for (var i = 0; i < 26; i++) {
        tempObj[(String.fromCharCode((65 + i))).toLowerCase()] = tempIndex
        tempIndex++
    }
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            let resIndex = tempObj[s[i - 1]] + parseInt(s[i])
            s = s.replace(s[i], Object.keys(tempObj)[resIndex]);
        }
    }
    return s
};
replaceDigits("a1c1e1")