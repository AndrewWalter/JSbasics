function isVow(a){
    for (let i = 0; i < a.length; i++) {
        let char = String.fromCharCode(a[i]);
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            a[i] = char;
        }
        
    }
    return a;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));