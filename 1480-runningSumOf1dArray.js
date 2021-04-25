// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
// 请返回 nums 的动态和。

// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 


var runningSum = function(nums) {
    let resultArray = [];
    let calc = 0;
    let calcNumber = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let n = 0; n <=calc; n++) {
            calcNumber+=nums[n];
        };
        resultArray.push(calcNumber);
        calcNumber = 0;
        calc++
    }
    return resultArray
};
console.log(runningSum([1, 2, 3, 4]));