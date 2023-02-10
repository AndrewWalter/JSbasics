function sumArray(array) {
  let total = 0;

  if(!array || array.length <= 2){
    return 0;
  }else{
    let highest = Math.max(...array);
    let lowest = Math.min(...array);
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total - (highest + lowest);
}
}

console.log(sumArray([6, 2, 1, 8, 10]));