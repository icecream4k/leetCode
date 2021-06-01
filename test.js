var achearr = [1, 2, 3, 4];
var bchearr = [];
//方法1：
for (var i = 0; i <= achearr.length; i++) {
    var a = i;
    var b = i + 1;
    bchearr.sort(function(a, b) {
        return a - b
    })
}
console.log(bchearr)