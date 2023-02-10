function sum(limit){
    let total = 0;
    for(let i = 0; i<=limit; i++){
        if(i%3 === 0){
            total += i;
        }else if(i%5 === 0){
            total += i;
        }
    }
    return total;
}
console.log(sum(66))