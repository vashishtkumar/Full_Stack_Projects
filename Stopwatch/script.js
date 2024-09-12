// catching the element
let totalTimeInput=document.querySelector("#time"); // input
let startBtn=document.querySelector("#start"); // start button
let pauseBtn=document.querySelector("#stop"); // stop button
let resetBtn=document.querySelector("#reset"); // restart button
let TimeLeft=document.querySelector("#current_time");  // span
let progressBar=document.querySelector("#progress_id"); // progress bar

pauseBtn.addEventListener("click",breakTimer);

TimeLeft.textContent="0";
progressBar.value="0";

let totalTime;
let currentTime=0;
let intervalId;


// to intialize the current value
function initTimer(){
totalTime=parseFloat(totalTimeInput.value)*60;
progressBar.setAttribute("max",totalTime);
TimeLeft.textContent=totalTime-currentTime;
}

// to update the UI
function updateUi(){
progressBar.value=currentTime;
TimeLeft.textContent=totalTime-currentTime;
}

// to stop the timer
function breakTimer(){
    clearInterval(intervalId);
}

// to rseet
function resetTimer(){
    clearInterval(intervalId);
    totalTimeInput.value="";
    progressBar.vlue="0";
    TimeLeft.textContent="0";
}

startBtn.addEventListener("click",()=>{
    // intialize
    initTimer();
    intervalId=setInterval(()=>{
   // increase the time
    currentTime++;
   // update the ui
   updateUi();
   if(currentTime==totalTime)
    breakTimer();
    },1000)
})

pauseBtn.addEventListener("click",breakTimer);
resetBtn.addEventListener("click",resetTimer);
