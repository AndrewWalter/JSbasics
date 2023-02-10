function reverse(input){
    let inputStr = input.toString();
    let array = inputStr.split('');
    let output = '';
    for(let i = array.length-1; i>=0; i--){
        output += array[i];
    }
    return output;
}
console.log(reverse(32243))