function largest(n , array) {
    let valArr = [];
    if(array.length === 0 || n === 0){
        return valArr;
    }else {
    for (let i = 0; i < n; i++) {
	    let highest = Math.max(...array);
	    valArr[i] = highest;
	    let highestPos = array.indexOf(highest);
	    if(highestPos > -1){
	            array.splice(highestPos, 1);
	    }
    }
}
    valArr.reverse();
    return valArr; 
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))