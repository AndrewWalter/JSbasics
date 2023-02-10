// Arrays

let array1 = []; // creating the an empty array
let array2 = [1, 2, 3, 4, 5]; // creating an array of numbers
//Logging the contents of both arrays
console.log(array1, array2);

for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]); // adding the contents of array2 to array1 in a loop using the push function.
    console.log("Added " + array2[i] + " to array 1")
}
console.log(array1, array2);

// Stacks - Stacks are linear data structures that allow operations only on one end
// Meaning that all basic operations like insertion can only be done at the ends of the structure. 
// This reason is because of the concept of Last in First Out(LIFO)
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
let paperStack = new Stack();
console.log(paperStack.peek());
paperStack.push("Item 1");
paperStack.push("Item 2");
paperStack.push("Item 3");
console.log(paperStack.peek());
console.log(paperStack.pop() + " removed from Stack");
console.log(paperStack.pop() + " removed from Stack");
console.log(paperStack.pop() + " removed from Stack");
//Queue First In First Out
class Queue {
    //Creates the queue
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    //Adds an item to the back of the queue
    enqueue(element){
        this.elements[this.tail]= element;
        this.tail++;
    } 
    //Takes an item off the front of the queue
    dequeue(){
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    //Shows the item at the front of the queue
    peek(){
        return this.elements[this.head];
    }
    //Gets the length of the queue
    get length() {
        return this.tail - this.head;
    }
    //Checks if the queue is empty
    get isEmpty() {
        return this.length === 0;
    }
}

let que = new Queue();
for (let i = 0; i < 10; i++) {
    console.log("Added " + i + " to the queue");
    que.enqueue(i);
}
console.log("Front of Queue is: " + que.peek());
for (let i = 0; i < 7; i++) {
    console.log(que.dequeue() + " Has been removed from the queue.");
    console.log("Front of queue is now: " + que.peek());
}

//Hashmaps
let map1 = new Map();

map1.set("loc1", 4622155335);
map1.set("loc2", 4245321);
map1.set("loc3", 34532);

console.log(map1.size);
console.log(map1.get("loc1"));