// 全字母句 指包含英语字母表中每个字母至少一次的句子。

// 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。

// 如果是，返回 true ；否则，返回 false 。

// 输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
// 输出：true
// 解释：sentence 包含英语字母表中每个字母至少一次。

var checkIfPangram = function(sentence) {
    var re = new RegExp("^[a-z]*|[A-Z]*$");
    if (re.test(sentence)) {
        return true
    } else {
        return false
    }
};
console.log(checkIfPangram('asdfg'));