/*Linear Search Exercises Question 1 */

//Function to generate a random number
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
//Function to populate an array with the desired number of values
function populateArray(length){
    let arr = []
    for(let i = 0; i< length; i++){
        let num = getRandomInt(25)
        arr.push(num);
    }
    return arr
}
function arraySearch(desired){
    let search = populateArray(20);
    let output = ""
    for (let i = 0; i < search.length; i++) {
        if(search[i] === desired){
            output = "The desired value: " + desired + " was found at index position: " + i;
            return output;
        }
        else{
            output = "The desired value: " + desired + " wasn't present in the generated array";
            return output;
        }
    }
}
console.log("Question 1");
console.log(arraySearch(prompt("Please enter a number to search for")));

/* Question 2 */
function largestValue() {
    let arr = populateArray(20);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    let largest = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i];
            index = i;
        }
    }
    let output = "The largest value of this array is:" + largest + ". \nThe index position of this value is: " + index;
    return output;
}
console.log("Question 2");
console.log(largestValue());

/* Question 3 Look at other file call fileReader.js */

/* Sorts */
//Bubble sort
function bubbleSort(array) {
    let sorted;
    for(let i = 0; i< array.length; i++){
        for(let j = 1; j< array.length - i; j++){
            if(array[j]< array[j -1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}

function testSort(){
    let test = populateArray(20);
    for(let i = 0; i<test.length; i++){
        console.log(test[i]);
    }
    sortedArray = bubbleSort(test);
    console.log("Sorted array:");
    for(let i = 0; i<sortedArray.length; i++){
        console.log(sortedArray[i]);
    }
}
testSort();

/*binary search*/
function binArray (desired){
    let array = populateArray(20);
    array = bubbleSort(array);
    let left = 0, right = array.length;
    do {
	let mid = Math.floor((left + right)/2);
	    if(array[mid] === desired){
	        let output = "Desired value of " + desired + " found at array position " + mid + "!"
            return output;
	    }else if(array[mid] < desired){
	        left = mid +1
	    }else{
	        right = mid -1
	    }
} while (left <= right);
    let output = "Desired value of " + desired + " wasn't present in array";
    return output;
}
console.log(binArray(prompt("Please enter a number to search for")));
function binArrayLargest() {
    let arr = populateArray(20);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    let sorted = bubbleSort(arr);
    let output = "The largest value of this array is:" + sorted[sorted.length-1] + ". \nThe index position of this value is: " + (sorted.length -1);
    return output;
}
console.log(binArrayLargest());