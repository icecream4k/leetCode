// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

var reverseLeftWords = function(s, n) {
    let temStr1 = '';
    let temStr2 = '';
    temStr1 = s.substring(0, n)
    temStr2 = s.substring(n, s.length)
    let resultStr = temStr2 + temStr1
    return resultStr
};
reverseLeftWords('lrloseumgh', 6)