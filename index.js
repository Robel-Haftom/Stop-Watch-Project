const timerEl = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const playButton = document.getElementById("play-button");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;
let playing = false;

startButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click",resetTimer);

playButton.addEventListener("click",()=>{
    if(playing){
        clearInterval(timeInterval);
        playing = false;
    } else{
        playStartTimer();
        playing = true;
    }
});

function startTimer(){
    startTime = Date.now();
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer(){
    clearInterval(timeInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00"
    startButton.disabled = false;
    stopButton.disabled = true;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime
        % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
         "." +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
         "." +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
         "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
        );
}

function playStartTimer(){
    startTime = Date.now();
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatPlayTime(elapsedTime);
    }, 10);
}

function formatPlayTime(){
    const milliseconds = Math.floor((elapsedTime
        % 1000) / 10);
    return milliseconds > 9 ? milliseconds : "0" + milliseconds;
}