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