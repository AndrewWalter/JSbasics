function fizzBuzz(input){
    if (typeof input !== 'number') {
	return "Not a Number";
	}else{
        if(input % 3 === 0){
	        if(input % 5 === 0){
	            return "FizzBuzz";
	        }else{
	            return "Fizz";
	        }
	
	    }else if(input %5 ===0){
	        return "Buzz";
	    }else{
	        return input;
	    }
    }
}

console.log(fizzBuzz(15));