// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。

// 输入：[4,2,1]

// 输出：4

// 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。

var minCount = function(coins) {
    let tempSum = new Number
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] % 2 == 0) {
            tempSum += coins[i] / 2
        } else {
            tempSum += (coins[i] - 1) / 2
            tempSum ++
        }
    }
    return tempSum
};
console.log(minCount([4,2,1]));