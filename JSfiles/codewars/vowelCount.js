function getCount(str) {
    let count = 0;
    let list = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let filList = list.filter(item => vowels.includes(item))
    count = filList.length;
    return count;
  }

console.log(getCount("abracadabra"))