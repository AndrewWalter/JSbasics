function litres(time) {
    let fullTime = Math.floor(time);
    let drink = fullTime * 0.5;
    let totalDrink = Math.floor(drink);
    return totalDrink;
}

console.log(litres(6.7));