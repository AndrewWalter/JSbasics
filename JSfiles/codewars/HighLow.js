function highAndLow(numbers){
    let nums = numbers.split(' ');
    let numArr = [];
    for (let i = 0; i < nums.length; i++) {
        numArr.push(parseInt(nums[i]));
    }
    let highest, lowest;
    highest = Math.max(...numArr);
    lowest = Math.min(...numArr);
    return "" + highest + " " +lowest;
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));