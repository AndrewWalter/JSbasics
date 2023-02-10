const fs = require('fs');

try {
  const data = fs.readFileSync('../../textFiles/dictionary.txt', 'utf8');
  const check = fs.readFileSync('../../textFiles/checkList.txt', 'utf8');
  let dictionary = data.split("\n");
  let checkList = check.split("\n");
  for(let i = 0; i <checkList.length; i++){
    if(dictionary[i] !== checkList[i]){
        console.log(checkList[i]);
    }
  }
  console.log(data);
} catch (err) {
  console.error(err);
}
