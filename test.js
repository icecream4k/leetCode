
var arr1=[1,2,3];
var arr2=[1,2];
let complement = arr1.filter(function (val) { return !(arr2.indexOf(val) > -1) }).concat(arr2.filter(function (val) { return !(arr1.indexOf(val) > -1) }))
console.log(complement);