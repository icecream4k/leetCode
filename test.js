let testArray = [{
    day: "2021-05-04",
    北仑: 3950,
    启东: 3700,
    舟山: 3780,
    董家口: 0
},{
    day: "2021-05-05",
    北仑: 3921,
    启东: 3410,
    舟山: 3670,
    董家口: 0
},{
    day: "2021-05-06",
    北仑: 3540,
    启东: 3760,
    舟山: 3780,
    董家口: 0
}]
let named = new Array;
let day = new Array;
let beiLunValue = new Array;
let qiDongValue = new Array;
let zhouShanValue = new Array;
let dongJiaKouValue = new Array;
for(let i = 0;i<testArray.length;i++){
    day.push(testArray[i].day)
    beiLunValue.push(testArray[i].北仑)
    qiDongValue.push(testArray[i].启东)
    zhouShanValue.push(testArray[i].舟山)
    dongJiaKouValue.push(testArray[i].董家口)
}
console.log(day);
console.log(beiLunValue);
console.log(qiDongValue);
console.log(zhouShanValue);
console.log(dongJiaKouValue);