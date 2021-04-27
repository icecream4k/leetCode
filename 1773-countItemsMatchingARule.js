// 给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。

// 另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。

// 如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：

// ruleKey == "type" 且 ruleValue == typei 。
// ruleKey == "color" 且 ruleValue == colori 。
// ruleKey == "name" 且 ruleValue == namei 。
// 统计并返回 匹配检索规则的物品数量 。
// 输入：items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// 输出：1
// 解释：只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"] 。

var countMatches = function(items, ruleKey, ruleValue) {
    let tempArrayType = new Array;
    let tempArrayColor = new Array;
    let tempArrayName = new Array;
    let endNumber = new Number;
    for (let i = 0; i < items.length; i++) {
        for (let n = 0; n < items[i].length; n++) {
            if (n == 0) {
                tempArrayType.push(items[i][n])
            } else if (n == 1) {
                tempArrayColor.push(items[i][n])
            } else if (n == 2) {
                tempArrayName.push(items[i][n])
            }
        }
    }
    if (ruleKey == 'type') {
        for (let i = 0; i < tempArrayType.length; i++) {
            if (tempArrayType[i] == ruleValue) {
                endNumber++
            }
        }
    } else if (ruleKey == 'color') {
        for (let i = 0; i < tempArrayColor.length; i++) {
            if (tempArrayColor[i] == ruleValue) {
                endNumber++
            }
        }
    } else if (ruleKey == 'name') {
        for (let i = 0; i < tempArrayName.length; i++) {
            if (tempArrayName[i] == ruleValue) {
                endNumber++
            }
        }
    }
    return endNumber
};
countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")