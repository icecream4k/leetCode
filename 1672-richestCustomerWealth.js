// 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

// 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
// 输入：accounts = [[1,2,3],[3,2,1]]
// 输出：6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。


var maximumWealth = function(accounts) {
    var temArray = [];
    function sum(arr) {
        return arr.reduce((p, c) => {
            return p + c
        });
    }
    for (let i = 0; i < accounts.length; i++) {
        temArray.push(sum(accounts[i])) 
    }
    var sumNumber = Math.max.apply(null, temArray);
    return sumNumber
};
console.log(maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5]
]))