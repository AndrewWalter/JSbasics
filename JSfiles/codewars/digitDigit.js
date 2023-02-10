function squaredigits(num){
    let result = "";
    let lnum = num.toString();
    for(let i = 0; i< lnum.length; i++){
        let nur = lnum.charAt(i);
        result = result + "" + Math.pow(nur, 2);
    }
    return Number(result);
}

console.log(squaredigits(9119));