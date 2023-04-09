//Creating an Array
let [seconds, minutes, hours] =[0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

//Function for the stopwatch
function stopwatch(){
    seconds++;  //increase seconds value by one
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes== 60){
            minutes=0;
            hours++;
        }
    }





    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;




    //Display the Exact hours,seconds and minutes
    displayTime.innerHTML = h +":"+ m +":"+ s;
}

//For Start
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

//For Stop
function watchStop(){
    clearInterval(timer);
}

//For Reset
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] =[0,0,0];
    displayTime.innerHTML= "00:00:00";
}