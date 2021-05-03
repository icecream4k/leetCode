function dayNowTime() {
    let myDate = new Date()
    let testYear = myDate.getFullYear().toString()
    let testMonth = myDate.getMonth() + 1
    let testDay = myDate.getDate().toString()
    if (testMonth < 10) {
        let endMonth = testYear + '-' + ('0' + testMonth.toString()) + '-' + testDay
        return endMonth
    } else {
        let endMonth = testYear + '-' + testMonth.toString() + '-' + testDay
        return endMonth
    }
}
function mondayArray(dateString) {
    let dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/

    if (dateString.match(dateStringReg)) {
        let presentDate = new Date(dateString),
            today = presentDate.getDay() !== 0 ? presentDate.getDay() : 7 // 7为从当前日起往后取7天

        return Array.from(new Array(7), function(val, index) {
            return formatDate(new Date(presentDate.getTime() - (today - index - 1) * 24 * 60 * 60 * 1000))
        })
    }

    function formatDate(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
}
console.log(mondayArray('2021-05-13'));