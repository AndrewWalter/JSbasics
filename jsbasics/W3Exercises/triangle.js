function heronsFormula(a,b,c){
    let semiPerm = (a + b + c)/2;
    let heron = semiPerm*(semiPerm-a)*(semiPerm-b)*(semiPerm-c);
    let area = Math.sqrt(heron);
    return area.toFixed(2);
}

console.log(heronsFormula(5,6,7));