const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log("draw");
    }
}
//Factory function 
function createCircle(radius) {
 return {
    radius,
    draw() {
        console.log("draw");
    }
 };
}
//Constructor function
function Circle (radius){
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
} 
//Both constructors and factory functions are valid ways to create objects just pick one and stick with it.

//for in loop
for (let key in circle){
    console.log(key, circle[key]);
}
//for each loop
for(let entry of Object.keys(circle)){
    console.log(entry);
}

const another = Object.assign({}, circle);
console.log("Cloned object");
console.log(another)
console.log("Second cloned object");
const anotherOne = {...circle};
console.log(anotherOne);