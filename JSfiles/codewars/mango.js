function mango (quantity, price){
    for (let i = 1; i < quantity; i++) {
        let total;
        if(i %3 !== 0){
            total = total + price;
        }
        return total;
    }
}
