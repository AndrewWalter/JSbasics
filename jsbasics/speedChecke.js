function checkSpeed(speed){
    const limit = 70;
    const perPoint = 5;
    if(speed < limit + perPoint){
        return "Ok";
    }
    let points = Math.floor((speed - limit)/ perPoint)
    if(points >= 12){
        return "License suspended";
    }else{
        return "number of points: " + points;
    }
}
console.log(checkSpeed(95));