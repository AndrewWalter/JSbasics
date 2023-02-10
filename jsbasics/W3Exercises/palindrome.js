function palindrome(word){
    let splitString = word.split('');
    let reverseArray = splitString.reverse();
    let reversed = reverseArray.join('');
    if(word === reversed){
        return word +" is a palindrome";
    }else{
        return word +" is not a palindrome";
    }
}

console.log(palindrome("kayak"))