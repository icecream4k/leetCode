const planningCar = async () => {
    return await this.$dataLNG.get('/bigScreenShow/todayPlans', {
        headers: {
            "x-auth-token": res.data.data['token']
        }
    })
};
const plannedWeight = async () => {
    return await this.$dataLNG.get('/bigScreenShow/todayPlansWeight', {
        headers: {
            "x-auth-token": res.data.data['token']
        }
    })
};
(async () => {
    const [planningCarFun, plannedWeightFun] = await Promise.all([
        planningCar(),
        plannedWeight()
    ]);
    console.log('promise.all方法计划重量:', plannedWeightFun.data.data);
    console.log('promise.all方法计划车辆', planningCarFun.data.data);
})()