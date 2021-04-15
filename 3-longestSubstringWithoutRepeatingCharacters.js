// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串

// ***
var lengthOfLongestSubstring = function(s) {
    var temString = '';
    for (let i = 0; i < s.length; i++) {
        if (temString.indexOf(s[i]) != -1) {
            // 判断在不在temString里面 **
            console.log(temString.indexOf(s[i]));
        } else {
            continue
        }
        console.log('-------');
    }









    // var temArray = [];
    // for (var i = 0; i <= s.length - 1; i++) {
    //     for (var u = i + 1; u <= s.length - 1; u++) {
    //         if (s[i] === s[u]) {
    //             break
    //         } else {
    //             var resultStr = s.slice(i, u)
    //             temArray.push(resultStr)
    //         }
    //     }
    // };
    // console.log(temArray);
    // for(let i = 0;i<temArray.length;i++){
    //     console.log(temArray[i]);
    // }
}
lengthOfLongestSubstring('pwwkew')