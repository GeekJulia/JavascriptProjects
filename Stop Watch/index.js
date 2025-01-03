let secondsElapsed = 0
let interval = null;
const TimerClock = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2,"0")
}

function setTimer(){ //tell us how many seconds has elapsed
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = ` ${padStart(minutes)}:${padStart(seconds)}`
}

function timer(){ 
    secondsElapsed ++;
    setTimer()
}
function startClock(){
    //if(interval) stopClock()
    clearInterval(interval)
    interval = setInterval(timer, 1000)
}
function stopClock(){
    clearInterval(interval)
}
function resetClock(){
    stopClock()
    secondsElapsed = 0
    setTimer()
}