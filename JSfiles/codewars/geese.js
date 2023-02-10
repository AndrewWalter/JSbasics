// old version that doesn't work
function gooseFilter (birds) {
    let filtered = birds;
    // let filtered = [];
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (let i = 0; i < geese.length; i++) {
        let word = geese[i];
        for(let j = 0; j < filtered.length; j++){
            if(filtered[j] === word){
                filtered.splice(j, 1);
                // filtered.push(birds[j])
            }
        }
    }    
    return filtered;
}

function gooseFilter2 (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
}

console.log(gooseFilter2([ 'Barbary', 'Crested', 'Barbary', 'Crested', 'Crested', 'Blue Swedish', 'Blue Swedish', 'Crested', 'Barbary', 'Barbary', 'Barbary', 'Crested', 'Crested', 'Crested', 'Barbary', 'Barbary', 'Mallard', 'Crested', 'Crested', 'Barbary', 'Pilgrim', 'Mallard', 'Blue Swedish', 'Barbary', 'Barbary', 'Crested', 'Crested', 'Hook Bill', 'Mallard', 'Blue Swedish', 'Crested', 'Pilgrim', 'Roman Tufted', 'Mallard', 'Barbary', 'Barbary', 'Barbary', 'Hook Bill', 'Crested' ]))
console.log([ 'Barbary', 'Crested', 'Barbary', 'Crested', 'Crested', 'Blue Swedish', 'Blue Swedish', 'Crested', 'Barbary', 'Barbary', 'Barbary', 'Crested', 'Crested', 'Crested', 'Barbary', 'Barbary', 'Mallard', 'Crested', 'Crested', 'Barbary', 'Mallard', 'Blue Swedish', 'Barbary', 'Barbary', 'Crested', 'Crested', 'Hook Bill', 'Mallard', 'Blue Swedish', 'Crested', 'Mallard', 'Barbary', 'Barbary', 'Barbary', 'Hook Bill', 'Crested' ])