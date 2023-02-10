//Question 1
function revStack(seq){
    let rev = seq.split(" ");
    let length = rev.length;
    let result = "";
    for(let i = 0; i< length; i++){
        if (i !== length-1) {
            result += rev.pop() + " ";
        }else{
            result += "" + rev.pop();
        }
    }
    return "Input sequence:" + seq + " Reversed sequence: " +result;
}
console.log("Question 1: ");
console.log(revStack("1 2 3 4 5 6 7 8 9 10"));
// Question 2&3 and stack class.
class Stack{
    constructor() {
        this.count = 0;
        this.data = {};
    }
    push(element) {
        this.data[this.count] = element;
        this.count++;
    }
    pop() {
        if(this.isEmpty() === false){
            this.count--;
            let result = this.data[this.count];
            delete this.data[this.count];
            return result;
        }
    }
    isEmpty(){
        return this.count === 0;
    }
    peek(){
        if(this.isEmpty() === true) {
            return "Stack is empty";
        }
        return this.data[this.count-1]
    }
}

function returnedVal (input){
    //create empty stack
    let stack = new Stack();
    //check stack is empty
    // console.log(stack.peek());
    //check bucket to catch the popped values
    let bucket = "";
    //Splits the input
    let arr = input.split(" ");
    //for loop to add input to the stack.
    for(let i = 0; i < arr.length; i++){
    if (arr[i] !== "*") {
	    stack.push(arr[i]);
    }else{
        bucket += stack.pop() + " ";
    }
    }
    return bucket
}
console.log("Question 2")
console.log(returnedVal("E A S * Y * Q U E * * * S T * * I O * N * * *"));
console.log("Question 3")
console.log(returnedVal("L A * S T I * N * F I R * S T * * O U * T * * * * * *"));