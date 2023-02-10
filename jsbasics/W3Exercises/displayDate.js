function currentDate(){
    let date = new Date();
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hour < 12){
        let output = "Today is : " + day + "\nCurrent time is: " + hour + " AM : " + minutes + " : " + seconds
        return output;
    }else{
        let output = "Today is : " + day + "\nCurrent time is: " + hour + " PM : " + minutes + " : " + seconds
        return output;
    }
}
console.log(currentDate());