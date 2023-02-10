function multiplyAll(input){
    let output = function multiply_all(num){
        let output = [];
        for(let i = 0; i< input.length; i++){
            output.push(input[i] * num);
        }
        return output;
    }
    return output;
}

console.log(multiplyAll([1,2,3])(2));