function mondayArray(dateString) {
    let dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/

    if (dateString.match(dateStringReg)) {
        let presentDate = new Date(dateString),
            today = presentDate.getDay() !== 0 ? presentDate.getDay() : 8

        return Array.from(new Array(8), function(val, index) {
            return formatDate(new Date(presentDate.getTime() - (today - index - 1) * 24 * 60 * 60 * 1000))
        })
    }

    function formatDate(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
}
let weekArray = mondayArray('2021-04-28')
console.log(weekArray);