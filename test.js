function dododo(coins) {
    let newNumber = new Number;
    for (let i = 0; i < coins.length; i++) {
        // 判断奇数偶数
        if (coins[i] % 2 == 0) {
            newNumber = newNumber + coins[i] / 2 // 1
        } else if (coins[i] == 1) {
            newNumber += 1
        } else {
            newNumber = newNumber + ((coins[i] - 1) / 2) + 1
        }
    }
    return newNumber
}
dododo([2, 3, 10])